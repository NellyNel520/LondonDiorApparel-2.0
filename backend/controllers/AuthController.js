const { User } = require('../models')
const middleware = require('../middleware')
// const jwt = require('jsonwebtoken')

const Register = async (req, res) => {
	try {
		console.log(req.body)
		// Extracts the necessary fields from the request body
		const { email, password, name } = req.body
		// Hashes the provided password
		let passwordDigest = await middleware.hashPassword(password)
		// Creates a new user
		const user = await User.create({ email, passwordDigest, name })
		// Sends the user as a response
		res.send(user)
	} catch (error) {
		throw error
	}
}

const Login = async (req, res) => {
	try {
		console.log(req.body)
		// Extracts the necessary fields from the request body
		const { email, password } = req.body
		// Finds a user by a particular field (in this case, email)
		const user = await User.findOne({
			email: email,
		})
		console.log(user)
		// Checks if the password matches the stored digest
		let matched = await middleware.comparePassword(
			user.passwordDigest,
			password
		)
		console.log(matched)
		// If they match, constructs a payload object of values we want on the front end
		if (matched) {
			let payload = {
				id: user.id,
				email: user.email,
			}

			// Creates our JWT and packages it with our payload to send as a response
			let token = middleware.createToken(payload)
			return res.send({ user: payload, token })
		}
		res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
	} catch (error) {
		console.log(error)
		res
			.status(401)
			.send({ status: 'Error', msg: 'An error has occurred on Login!' })
	}
}

const UpdatePassword = async (req, res) => {
	try {
		// Extracts the necessary fields from the request body
		const { oldPassword, newPassword } = req.body
		// Finds a user by a particular field (in this case, the user's id from the URL param)
		const user = await User.findByPk(req.params.user_id)
		// Checks if the password matches the stored digest
		let matched = await middleware.comparePassword(
			user.passwordDigest,
			oldPassword
		)
		// If they match, hashes the new password, updates the db with the new digest, then sends the user as a response
		if (matched) {
			let passwordDigest = await middleware.hashPassword(newPassword)
			await user.update({ passwordDigest })
			// Constructs a payload object of values we want on the front end (useful for things like updating a profile picture or similar)
			let payload = {
				id: user.id,
				email: user.email,
			}
			return res.send({ status: 'Password Updated!', user: payload })
		}
		res
			.status(401)
			.send({ status: 'Error', msg: 'Old Password did not match!' })
	} catch (error) {
		console.log(error)
		res
			.status(401)
			.send({
				status: 'Error',
				msg: 'An error has occurred updating password!',
			})
	}
}

const CheckSession = async (req, res) => {
	try {
		// Extracts the necessary fields from the res.locals
		const { payload } = res.locals
		// Queries our database for a user based on the email we received from jwt.verify as "payload"
		const foundUser = await User.findOne({
			email: payload.email,
		})
    console.log(foundUser)
		// Constructs a user object of values we want on the front end (NOT including passwordDigest or any other sensitive data)
		const user = {
			id: foundUser.id,
			email: foundUser.email,
			name: foundUser.name,
		}
		res.send(user)
	} catch (error) {
		console.log(error)
		res
			.status(401)
			.send({
				status: 'Error',
				msg: 'An error has occurred checking the session!',
			})
	}
}

module.exports = {
	Register,
	Login,
	UpdatePassword,
	CheckSession,
}

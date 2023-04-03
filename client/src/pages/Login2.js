import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import { Link } from 'react-router-dom'

const Login2 = ({ setUser }) => {
	let navigate = useNavigate()

	const initialState = { email: '', password: '' }

	const [formValues, setFormValues] = useState(initialState)

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const payload = await SignInUser(formValues)
		setFormValues(initialState)
		setUser(payload)
		navigate('/')
	}

	return (
		<div className="signin-cont font-play">
			<div className="signin-wrapper">
				<div className="text-center text-5xl text-blue-500 font-bold font-play pb-[2rem]">
					SIGN IN
				</div>
				<form className="col" onSubmit={handleSubmit}>
					<div className="text-center justify-center">
						<div className="flex justify-center input-wrapper text-xl pb-3">
							<label htmlFor="email" className="pr-2">
								Email:
							</label>
							<input
								onChange={handleChange}
								name="email"
								type="email"
								placeholder="example@example.com"
								value={formValues.email}
								required
							/>
						</div>
						<div className="flex input-wrapper justify-center text-center text-xl pb-5">
							<label htmlFor="password" className="pr-2">
								Password:
							</label>
							<input
								onChange={handleChange}
								type="password"
								name="password"
								value={formValues.password}
								required
							/>
						</div>
						<button
							disabled={!formValues.email || !formValues.password}
							className="ml-3 rounded-md border border-transparent bg-blue-500 py-3 px-5 mb-6 text-lg font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
						>
							Sign In
						</button>
						<div className='text-bold underline hover:text-blue-600'>FORGOT YOUR PASSWORD?</div>
						<Link to={"/register"}>
							<div className='text-bold underline hover:text-blue-600'>CREATE A NEW ACCOUNT</div>
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login2

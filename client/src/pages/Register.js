import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { Link } from 'react-router-dom'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 150, 255, 0.5), rgba(0, 0, 0, 0.5)),
		url('https://i.postimg.cc/Hkh6PLXN/LDA-Logo-Blue2nooffset.png') center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 20px;
	${mobile({ width: '75%' })}
`

const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 300;
	
`

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`

const Agreement = styled.span`
	font-size: 0.9rem;
	margin: 20px 0px;
`

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #0ca2e2;
	color: white;
	cursor: pointer;
`

const Register = () => {
	let navigate = useNavigate()
	const initialState = {
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	}
	const [formValues, setFormValues] = useState(initialState)

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		await RegisterUser({
			name: formValues.name,
			email: formValues.email,
			password: formValues.password,
		})
		setFormValues(initialState)
		navigate('/signIn')
	}
	return (
		<div>
			<Container className="font-play">
				<Wrapper>
					<div>
						<Title className="text-center font-abril  ">Create Account</Title>
						<Form onSubmit={handleSubmit}>
							<Input onChange={handleChange} placeholder="First Name" />
							<Input onChange={handleChange} placeholder="Last Name" />
							<Input onChange={handleChange} placeholder="Email" />
							<Input onChange={handleChange} placeholder="Username" />
							<Input onChange={handleChange} placeholder="Password" />
							<Input onChange={handleChange} placeholder="Confirm Password" />
							<Agreement className='text-center'>
								<span className="font-bold">Terms & Conditions: </span>
								By registering for an online account, you agree to our terms and
								conditions, privacy policy, and any other relevant policies.
							</Agreement>
							<Button type="submit" disabled={
							!formValues.email ||
							(!formValues.password &&
								formValues.confirmPassword === formValues.password)
						}  className="rounded ml-[9.5rem] hover:bg-white hover:text-blue-400">
								CREATE
							</Button>
						</Form>

						<div className="mt-4 ml-[13rem]">
							<h3>Already a User?</h3>
							<Link to="/login">
								<button className="ml-3 rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
									Sign In
								</button>
							</Link>
						</div>

					</div>
				</Wrapper>
			</Container>
		</div>
	)
}

export default Register

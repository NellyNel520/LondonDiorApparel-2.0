import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mobile } from '../responsive'

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
	font-size: 24px;
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
	font-size: 12px;
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
	return (
		<div>
			<Navbar />
			<Container className="font-play">
				<Wrapper>
					<Title className="text-center">Create Account</Title>
					<Form>
						<Input placeholder="First Name" />
						<Input placeholder="Last Name" />
						<Input placeholder="Email" />
						<Input placeholder="Username" />
						<Input placeholder="Password" />
						<Input placeholder="Confirm Password" />
						<Agreement>
							<span className="font-bold">Terms & Conditions: </span>
							By registering for an online account, you agree to our terms and
							conditions, privacy policy, and any other relevant policies.
						</Agreement>
						<Button className="rounded hover:bg-white hover:text-blue-400">
							CREATE
						</Button>
					</Form>
				</Wrapper>
			</Container>
      <Footer />
		</div>
	)
}

export default Register

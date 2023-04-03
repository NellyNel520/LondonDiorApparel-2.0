import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import { Link } from 'react-router-dom'



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(0, 150, 255, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://i.postimg.cc/Hkh6PLXN/LDA-Logo-Blue2nooffset.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0ca2e2;
  color: white;
  cursor: pointer;
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`;

// const Error = styled.span`
//   color: red;
// `;

const Login = ({ setUser }) => {
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
 
  <Container className='font-play'>
    <Wrapper>
      <Title className='text-center'>SIGN IN</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='Email'  onChange={handleChange}/>
        <Input placeholder='Password'  onChange={handleChange}/>
        <Button type='submit' disabled={!formValues.email || !formValues.password} className='rounded'>LOGIN</Button>
        <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
        <Links><Link to={"/signup"}>CREATE A NEW ACCOUNT</Link></Links>
      </Form>
    </Wrapper>
  </Container>
 
  )
}

export default Login
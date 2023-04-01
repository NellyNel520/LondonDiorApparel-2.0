import React from 'react'
import styled from "styled-components";

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
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  ${'' /* ${mobile({ width: "75%" })} */}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0ca2e2;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title className='text-center'>Create an account</Title>
        <Form>
          <Input placeholder='First Name'/>
          <Input placeholder='Last Name'/>
          <Input placeholder='Email'/>
          <Input placeholder='Username'/>
          <Input placeholder='Password'/>
          <Input placeholder='Confirm Password'/>
          <Agreement>
          <span className='font-bold'>Terms & Conditions: </span>
          By registering for an online account, you agree to our terms and conditions, privacy policy, and any other relevant policies. 
          </Agreement>
          <Button className='rounded'>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
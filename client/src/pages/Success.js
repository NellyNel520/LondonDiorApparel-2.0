import React from 'react'
import styled from 'styled-components'



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
		${'' /* ${mobile({ width: '75%' })} */}
	`

const Success = () => {
	return (
    <Container>
    <Wrapper>


		<div className="flex justify-center text-black`">
			<div className="text-center">
        <div className="text-4xl">Success! </div>
        <div>Your order is being processed. Thank you for shopping with London Dior Apparel </div>
      </div>
		</div>
    </Wrapper>
    </Container>
	)
}

export default Success
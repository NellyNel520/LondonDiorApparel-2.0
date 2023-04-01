import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
`

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
`

const Image = styled.img`
	height: 90%;
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`

const Title = styled.h1`
	font-size: 70px;
`

const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: ;
	cursor: pointer;
`

const Slider = () => {
	return (
		<Container>
			<Arrow>
				<ArrowBackIosIcon />
			</Arrow>

			<Wrapper>
				<Slide>
					<ImgContainer>
						<Image src="https://i.postimg.cc/13fxzcXc/hoodie-mockup-of-a-man-with-cool-locs-m10777-2.png" />
					</ImgContainer>
					<InfoContainer>
						<Title>SPRING FLING </Title>
						<Desc>
							Spring into style with our exclusive Spring sale! Shop now and get
							amazing discounts on our latest collection of clothing.
						</Desc>
						<Button className="bg-blue-400 hover:bg-yellow-300 hover:text-blue-600">
							SHOP NOW
						</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>

			<Arrow>
				<ArrowForwardIosIcon />
			</Arrow>

		</Container>
	)
}

export default Slider

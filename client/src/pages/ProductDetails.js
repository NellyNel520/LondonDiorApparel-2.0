import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${'' /* ${mobile({ padding: "10px", flexDirection: "column" })} */}
`

const ImgContainer = styled.div`
	flex: 1;
`

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${'' /* ${mobile({ height: "40vh" })} */}
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 20px 40px;
  ${'' /* background-color: gray; */}
  height: 90%;
	${'' /* ${mobile({ padding: "10px" })} */}
`

const Title = styled.h1`
	font-weight: 200;
`

const Desc = styled.p`
	margin: 20px 0px;
`

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	border: 3px white;
	justify-content: space-between;
	${'' /* ${mobile({ width: "100%" })} */}
`

const Filter = styled.div`
	display: flex;
	align-items: center;
`

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${'' /* ${mobile({ width: "100%" })} */}
`

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`

const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: #f8f4f4;
	}
`

const ProductDetails = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://i.postimg.cc/23NYW1t8/mockup-of-a-bearded-man-wearing-a-bella-canvas-long-sleeve-tee-m13939.png" />
				</ImgContainer>
				<InfoContainer>
					<Title className="text-3xl text-blue-400">
						Black By Popular Demand
					</Title>
					<Desc className="text-white text-xl">
						This classic t-shirt is a wardrobe essential. Made from high-quality
						cotton, it's soft, comfortable, and durable. The versatile design
						makes it perfect for any casual occasion. Available in a range of
						colors and sizes to suit your style.
					</Desc>
					<Price className="text-white">$20</Price>

					<FilterContainer>
						<Filter>
							<FilterTitle className="text-white">Color:</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="blue" />
							<FilterColor color="red" />
						</Filter>
						<Filter>
							<FilterTitle className="text-white">Size:</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
								<FilterSizeOption>2X</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	)
}

export default ProductDetails

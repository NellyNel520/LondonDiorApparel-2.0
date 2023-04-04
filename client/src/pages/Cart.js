import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { useSelector } from "react-redux";

const Container = styled.div`
	${'' /* background-color: white; */}
`

const Wrapper = styled.div`
	padding: 1rem 1rem 4rem 1rem;
	${'' /* ${mobile({ padding: "10px" })} */}
	${mobile({ padding: '10px' })}
`

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	${
		'' /* background-color: ${(props) =>
    props.type === "filled" ? "white" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"}; */
	}
	${'' /* background-color: blue; */}
`

const TopTexts = styled.div`
	${mobile({ display: 'none' })}
`
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}
`

const Info = styled.div`
	flex: 3;
`

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ flexDirection: 'column' })}
`

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`

const Image = styled.img`
	width: 200px;
`

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: '5px 15px' })}
`

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: '20px' })}
`

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightblue;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`

const SummaryTitle = styled.h1`
	font-weight: 200;
`

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`

const Cart = () => {
	const cart = useSelector((state) => state.cart)

	return (
		<Container className="text-white font-play">
			<Wrapper>
				<Title className="text-xl text-blue-400">YOUR CART</Title>
				<Top>
					<TopButton className="bg-white text-blue-400 hover:bg-blue-400 hover:text-white rounded">
						CONTINUE SHOPPING
					</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist(12)</TopText>
					</TopTexts>
					<TopButton
						type="field"
						className="bg-blue-400 rounded text-black hover:text-white"
					>
						CHECKOUT NOW
					</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map((product) => (
							<Product>
								<ProductDetail>
									<Image src="https://i.postimg.cc/13fxzcXc/hoodie-mockup-of-a-man-with-cool-locs-m10777-2.png" />
									<Details>
										<ProductName>
											<b className="text-blue-400">Product: </b>Budtender Hoodie
										</ProductName>
										<ProductId>
											<b className="text-blue-400">ID:</b> 97950707-38424
										</ProductId>
										<ProductColor color="pink" />
										<ProductSize>
											<b className="text-blue-400">Size:</b> L
										</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add />
										<ProductAmount>2</ProductAmount>
										<Remove />
									</ProductAmountContainer>
									<ProductPrice>$45.00</ProductPrice>
								</PriceDetail>
							</Product>
						))}

						<Hr />
					</Info>
					<Summary>
						<SummaryTitle className="text-2xl text-blue-400">ORDER SUMMARY</SummaryTitle>
						<SummaryItem className="text-xl">
							<SummaryItemText>Subtotal:</SummaryItemText>
							<SummaryItemPrice>$75.00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping:</SummaryItemText>
							<SummaryItemPrice>$4.29</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount:</SummaryItemText>
							<SummaryItemPrice>-$4.29</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText type="total" className="text-blue-400 text-xl">
								Total:
							</SummaryItemText>
							<SummaryItemPrice>$75.00</SummaryItemPrice>
						</SummaryItem>

						<Button className="hover:bg-[#0ca2e2] border rounded">
							CHECKOUT
						</Button>
					</Summary>
				</Bottom>
			</Wrapper>
		</Container>
	)
}

export default Cart

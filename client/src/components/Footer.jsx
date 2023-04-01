import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { Phone } from '@mui/icons-material'

const Container = styled.div`
	display: flex;
  ${'' /* background: white; */}
`
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
	margin: 20px 0px;
`

const SocialContainer = styled.div`
	display: flex;
`

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`

const Center = styled.div`
	flex: 1;
	padding: 20px;
`

const Title = styled.h3`
	margin-bottom: 30px;
 
`

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`

const Right = styled.div`
	flex: flex-end;
	padding: 20px;
`

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`

const Payment = styled.img`
	width: 50%;
`

const Footer = () => {
	return (
		<Container className="text-blue-400">
			<Left>
				<Logo>London Dior Apparel</Logo>
				<Desc>
					London Dior Apparel, your one-stop-shop for all things fashion! We are
					excited to offer you the latest and most stylish clothing options in
					the market.
				</Desc>
				<SocialContainer className='mt-10'>
					<SocialIcon>
						<LinkedInIcon sx={{ fontSize: "50px" }} className='text-blue-700'/>
					</SocialIcon>
					<SocialIcon>
						<GitHubIcon sx={{ fontSize: "50px" }} className='text-gray-400'/>
					</SocialIcon>
					<SocialIcon>
						<InstagramIcon sx={{ fontSize: "50px" }} className='text-pink-700'color="E4405F" />
					</SocialIcon>
					<SocialIcon>
						<FacebookIcon sx={{ fontSize: "50px" }}color="3B5999" className='text-blue-500' />
					</SocialIcon>
				</SocialContainer>
			</Left>

			<Center>
				<Title>Resources</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>


			<Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon /> 1101 Broad Street, Richmond VA 23223
        </ContactItem>
        <ContactItem>
          <Phone /> +1 888 234 7345
        </ContactItem>
        <ContactItem>
          <EmailIcon /> contact@LondonDiorApparel.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
		</Container>
	)
}

export default Footer
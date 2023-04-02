import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
	return (
 <Container>
      <Wrapper className='text-blue-400'>
        <Left>
          <Language>EN</Language>
          <SearchContainer className='rounded'>
            <Input className="text-black" placeholder="Search" />
            <SearchIcon style={{ color: "#0ca2e2", fontSize: 25 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LONDON DIOR APPAREL</Logo>
        </Center>
        <Right>
					<MenuItem>HOME</MenuItem>
					<MenuItem>PRODUCTS</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
					<MenuItem>ABOUT</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>

		// <nav>
		// 	<div className="h-16 bg-black text-blue-400">
		// 		<div className="px-2.5 py-5 flex justify-between">
		// 			<div className="flex-1 ">
		// 				<div className="flex ml-6 p-1.5 text-center">
		// 					<div className="language text-3.5 pr-4">EN</div>
		// 					<input placeholder="Search" />
		// 					<SearchIcon />
		// 				</div>
		// 			</div>

		// 			<div className="flex-1">
		// 				<div className="ml-2 p-1.5 text-center font-bold">
		// 					LONDON DIOR APPAREL
		// 				</div>
		// 			</div>

		// 			<div className="flex justify-end pr-2 flex-1 text-center">
		// 				<div className=" text-[14px] ml-[25px]">Home</div>
		// 				<div className=" text-[14px] ml-[25px]">Products</div>
		// 				<div className=" text-[14px] ml-[25px]">Register</div>
		// 				<div className=" text-[14px] ml-[25px]">sign in</div>
		// 				<div className=" text-[14px] ml-[25px]">About</div>
		// 				<div className=" text-[14px] ml-[25px]">
		// 					<Badge badgeContent={4} color="primary">
		// 						<ShoppingCartIcon />
		// 					</Badge>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>
	)
}

export default Navbar

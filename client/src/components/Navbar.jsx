import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const Navbar = () => {
	return (
		<nav>
			<div className="h-16 bg-black text-blue-400">
				<div className="px-2.5 py-5 flex justify-between">
					<div className="flex-1 ">
						<div className="flex ml-6 p-1.5 text-center">
							<div className="language text-3.5 pr-4">EN</div>
							<input placeholder="Search" />
							<SearchIcon />
						</div>
					</div>

					<div className="flex-1">
						<div className="ml-2 p-1.5 text-center font-bold">
							LONDON DIOR APPAREL
						</div>
					</div>

					<div className="flex justify-end pr-2 flex-1 text-center">
						<div className=" text-[14px] ml-[25px]">Home</div>
						<div className=" text-[14px] ml-[25px]">Products</div>
						<div className=" text-[14px] ml-[25px]">Register</div>
						<div className=" text-[14px] ml-[25px]">sign in</div>
						<div className=" text-[14px] ml-[25px]">About</div>
						<div className=" text-[14px] ml-[25px]">
							<Badge badgeContent={4} color="primary">
								<ShoppingCartIcon />
							</Badge>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

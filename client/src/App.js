import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './global'
import './styles/App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import ProductPage from './pages/ProductPage'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'


function App() {
	// const [user, setUser] = useState(null)
	return (
		<div>
			
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path='/about' element={<About />}/>
					<Route path="/products" element={<ProductPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/products/:id" element={<ProductDetails />} />
				</Routes>
			</main>
      
		</div>
	)
}

export default App

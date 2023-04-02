import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './global'
import { CheckSession } from './services/Auth'
import './styles/App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductPage from './pages/ProductPage'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Announcement from './components/Announcement'


function App() {
	const [user, setUser] = useState(null)

	const handleLogOut = () => {
		//Reset all auth related state and clear localStorage
		setUser(null)
		localStorage.clear()
	}

	const checkToken = async () => {
		const user = await CheckSession()
		setUser(user)
	}

	useEffect(() => {
		const token = localStorage.getItem('token')

		if (token) {
			checkToken()
		}
	}, [])

	return (
		<div>
			<Navbar />
			<Announcement />
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
			<Footer />
      
		</div>
	)
}

export default App

import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import './styles/App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductPage from './pages/ProductPage'
import Login from './pages/Login'
import Login2 from './pages/Login2'
// import Register from './pages/Register'
import Register2 from './pages/Register2'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Announcement from './components/Announcement'
import axios from 'axios'
import { BASE_URL } from './global'
function App() {
	const [user, setUser] = useState(null)
	const [products, setProducts] = useState([])


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

	// made call high up just incase needed in multiple components
	const getAllProducts = async () => {
		const response = await axios.get(`${BASE_URL}product/products`)
		setProducts(response.data.products)
		// console.log(response.data)
	}

	return (
		<div>
			<Navbar user={user} handleLogOut={handleLogOut} />
			<Announcement user={user} />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/about" element={<About />} />
					<Route path="/products/:category" element={<ProductPage />} />
					<Route path="/products" element={<ProductPage />} />
					<Route path="/product/:id" element={<ProductDetails />} />
					{/* <Route path="/login" element={<Login setUser={setUser}/>} /> */}
					<Route path="/login" element={<Login2 setUser={setUser} />} />
					{/* <Route path="/signup" element={<Register />} /> */}
					<Route path="/register" element={<Register2 />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App

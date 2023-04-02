import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductCategory from "./pages/ProductCategory";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import './styles/App.css'
import { useState } from 'react'



function App() {
  const [user, setUser] = useState(null)
  return (
    <div>
     <Home />
    </div>
  );
}

export default App;

import React from 'react'
import  {Routes , Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import AdminDashborad from './AdminDashborad';
import CartPage from './CartPage';
import ProductDetails from './ProductDetails';
  
import './App.css'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodcut/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/dasboard" element={<AdminDashborad />} />
          </Routes>
     
      </div>
    </>
  )
}

export default App;

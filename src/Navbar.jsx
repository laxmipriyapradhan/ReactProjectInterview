import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav >

            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart ({totalItems})</Link></li>
            <li><Link to="/admin">Admin </Link></li>

        </nav>
    );
}

export default Navbar;
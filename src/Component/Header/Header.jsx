import React from 'react';
import logo from '../../../images/Logo.svg'
import './Header.css' 
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className="header">
             <Link to="/">Shop</Link>
             <Link to="/order">Order</Link>
             <Link to="/inventory">Invetory</Link>
             <Link to="/login">Log In</Link>
            </div>
        </nav>
    );
};

export default Header;
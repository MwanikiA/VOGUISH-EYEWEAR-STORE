import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa'; 
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';
import Logo from '../../assets/logo.jpeg'
import './nav.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/login" className="nav-link">
            <FaUser className="nav-icon" />
            <p>Log-in</p>
          </Link>
          <Link to="/wishlist" className="nav-link">
            <FaHeart className="nav-icon" />
            <p>Wishlist</p>
          </Link>
        </div>
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo" />
          </div>
        
        <div className="navbar-right">
          <div className="dropdown">
            <button className="dropbtn">Products</button>
            <div className="dropdown-content">
              <Link to="/optical-glasses">Optical Glasses</Link>
              <Link to="/sunglasses">Sunglasses</Link>
              <Link to="/contact-lenses">Contact Lenses</Link>
              <Link to="/masquarade-masks">Masquarade Masks</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Engage with us</button>
            <div className="dropdown-content">
              <a href="https://wa.me/+25440582851">
                <RiWhatsappFill /> WhatsApp
              </a>
              <a href="https://www.instagram.com/voguish_eyewearandaccesories">
                <RiInstagramFill /> Instagram
              </a>
            </div>
          </div>
          <Link to="/cart" className="nav-link">
            <FaShoppingCart className="nav-icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

const navbar = () => {
  return(
    <header>
      <nav className="navbar">
        <span className="navbarBrand"><a href="/logo">Logo</a></span>
        <ul className="navbarItems">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About me</Link></li>
          <li><Link to="/contact">Contanct</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default navbar;
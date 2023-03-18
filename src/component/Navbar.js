
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import  NavLink from 'react-bootstrap/NavLink';
import './navbar.css';
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

  const [navActive, setNavActive] = useState(false);

  const toggleNavActive = () => {
    setNavActive(!navActive);
  };
  const closeNavActive = () => {
    setNavActive(false);
  };

    return  (

      <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="path/to/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/skill">Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="/education">Education</Link>
        </li>
        <li className="nav-item">
          <Link to="/project">project</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="burger" onClick={toggleNavActive}>
        <div className="line1"> </div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    );
  };
    
  export default Navbar;
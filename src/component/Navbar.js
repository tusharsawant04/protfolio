
import React, { useState,useRef  } from 'react';
import Nav from 'react-bootstrap/Nav';
import  NavLink from 'react-bootstrap/NavLink';
import './navbar.css';
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Home from '../pages/home';

const Navbar = () => {

  const [navActive, setNavActive] = useState(false);

  const toggleNavActive = () => {
    setNavActive(!navActive);
  };
  const closeNavActive = () => {
    setNavActive(false);
  };

  const scrollToAbout = () => {
    const homeRef = document.getElementById('home');
    homeRef.scrollIntoView({ behavior: 'smooth' });
  };

  const handdleClick=()=>{
    closeNavActive();
    scrollToAbout();
  }

    return  (

      <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="path/to/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
      <li>
        <div className="burger" onClick={closeNavActive}>
        <div className="line1"> </div>
        <div className="line2"></div>
        <div className="line3"></div>
        </div>
        </li>
        <li className="nav-item">
          <Link to={{pathname: '/', hash: '#home'}} onClick={handdleClick}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/skill" onClick={closeNavActive}>Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="/education" onClick={closeNavActive}>Education</Link>
        </li>
        <li className="nav-item">
          <Link to="/project" onClick={closeNavActive}>project</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" onClick={closeNavActive}>Contact</Link>
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

import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import  NavLink from 'react-bootstrap/NavLink';
import './navbar.css';
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

  const [click, setClick]= useState(false);

  const handleClick=()=> setClick(!click);




    return  <div className='header'>
    <Link to="/">
      <h1>ts</h1>
    </Link>
<ul className={click ?"nav-menu.active":"nav-menu"}>
  

  <li>
    <Link to="/"><h4>Home</h4></Link>
  </li>

  <li>
    <Link to="/project"><h4>project</h4></Link>
  </li>

  <li>
    <Link to="/education"><h4>Education</h4></Link>
  </li>

  <li>
    <Link to="/about"><h4>about</h4></Link>
  </li>

  <li>
    <Link to="/skill"><h4>skill</h4></Link>
  </li>

  <li>
    <Link to="/contact"><h4>contact</h4></Link>
  </li>

</ul>
<div className='hamburger' onClick={handleClick}>
  {click? (
     <FaTimes size={20} style={{ccolor:"#fff"}} />
     )
  :(
     <FaBars size={20} style={{ccolor:"#fff"}} />
     )}
 

</div>

  </div>
 
  };
    
  export default Navbar;
import "./heroimg.css";
import React from 'react';
import Navbar from '../component/Navbar';
import tushar from '../assests/intro-bg.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Heroimg = () => {
  return ( 
    <> 
   
<div className="hero">
   
  <div className="mask">
    <img className="into-img" variant="center"  src={tushar} />
      <div className="cont">
      <h1 className="tt">hiiiii There,<br></br>I'am Tushar Sawant
      </h1> 
      <div className="bt">
          <button className="btn btn-primary">About me</button>
      </div>
  </div>


    </div>

</div>


    </>
  )
};
  
export default Heroimg;
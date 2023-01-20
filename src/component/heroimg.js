import "./heroimg.css";



import React from 'react';
import Navbar from '../component/Navbar';
import tushar from '../assests/tushar.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Heroimg = () => {
  return ( 
    <> 
   
<div className="box">
   

<h1 className="tt">hiiiii There,<br></br>I'am Tushar Sawant

<div className="bt">
<button className="btn btn-primary">About me</button>
</div>
</h1> 
<div>


      <img className="imgt" variant="center"  src={tushar} />
     
      
   
</div>

   </div>


    </>
  )
};
  
export default Heroimg;
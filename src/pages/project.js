

import React from 'react';
import Navbar from '../component/Navbar';
import ts from '../assests/ts.jpg';

import'./project.css';
import 'react-slideshow-image/dist/styles.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url:require("../assests/p11.png") },
  { url: require("../assests/p12.png") },
  { url: require("../assests/p13.png") },
  { url: require("../assests/p14.png" )},
  { url: require("../assests/p15.png" )},
  { url: require("../assests/p16.png" )}
  
];

const Project = () => {
    return (
      <>
      projects
      <div className='s1'>
       
      <div className='slide'>
      <SimpleImageSlider
        width={350}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
      />
        </div>
        <div className='s2'>
          <p>1   Ecommerse </p>
        </div>
      </div>
      </>
    )
}

  
export default Project;
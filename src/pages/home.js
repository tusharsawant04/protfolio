
import React from 'react';
import Navbar from '../component/Navbar';
import ts from '../assests/ts.jpg';
import './home.css';
import Heroimg from '../component/heroimg';
import Contact from './contact';
import About from './about';
import Education from './education';
import Skill from './skill';
import Project from './project';

const Home = () => {
  return (
 
  <>
<div className='contener'>
  
  <div>

  <Heroimg/>
  </div>
  <div>
  <Project/>
  </div>
  <div>
  <About/>
  </div>
  <div>
  <Education/>
  </div>
  <div>
  <Skill/>
  </div>
  <div>
  <Contact/>
  </div>
  </div>
  </>
 

 
  );
};
  
export default Home;
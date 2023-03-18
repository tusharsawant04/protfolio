
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
 
    <div className="front-page">
       <Navbar/>
      <div className="hero-section">
        <h1>Welcome to My Portfolio Website</h1>
        <p>I am a full-stack developer based in [Your Location], and I love building awesome web applications.</p>
        <button>Learn More</button>
      </div>
      <div className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={ts} alt="Profile Image" />
          </div>
          <div className="about-text">
            <p>I have been working as a web developer for [Number of Years] years, and I specialize in [Your Specialization].</p>
            <p>When I am not coding, you can find me [Your Hobbies or Interests].</p>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
  
 

 
  
};
  
export default Home;
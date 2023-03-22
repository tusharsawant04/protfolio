
import React, { useRef }from 'react';
import Navbar from '../component/Navbar';
import ts from '../assests/tushar.jpg';
import './home.css';
import Heroimg from '../component/heroimg';
import Contact from './contact';
import About from './about';
import Education from './education';
import Skill from './skill';
import Project from './project';
import { Link } from 'react-router-dom';

const Home = () => {
  const homeRef = useRef(null);
return (
 
    <div className="front-page">
      
      <div className="hero-section">
        <h1>Welcome to My Portfolio Website</h1>
        <p>I am a full-stack developer and I love building awesome web applications.</p>
        <button>Learn More</button>
      </div>
      <div className="about-section" ref={homeRef}>
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={ts} alt="Profile Image" />
          </div>
          <div className="about-text">
            <p>I am a final year student of computer engineering with a passion for software development and problem-solving. 
              <br></br>During my studies,
               I have gained hands-on experience in various programming languages, data structures, algorithms, and software development tools.</p>
            <p> In my free time, I enjoy writing poetry to express my creativity and unwind after long coding sessions.<br></br>
               I am excited to apply my skills and knowledge to real-world problems and contribute to the development of innovative solutions..</p>
            <p> Thank you for taking the time to visit my portfolio, and feel free to reach out if you have any questions or opportunities!</p>
            <Link to="/contact">
            <button>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
 

 
  
};
  
export default Home;
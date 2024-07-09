

import React, { useState } from 'react';

import'./project.css';
import 'react-slideshow-image/dist/styles.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './project.css';

const projects = [ 
  { 
  title: 'Food Ordering Website',
  description: 'A project I created using React',
  images: [
    require('../assests/p11.png'),
    require('../assests/p12.png'),
    require('../assests/p13.png'),
    require('../assests/p14.png'),
    require('../assests/p15.png'),
    require('../assests/p16.png'),
  ],
  date: 'March 2022',
  technologies: 'React, JavaScript, HTML, CSS',
  link: 'https://tusharsawant.netlify.app/',
  GitHub:'https://github.com/tusharsawant04/ecom',
   },
  { 
    title: 'E voting',
    description: 'A project I created using PHP HTML CSS SQL',
    images: [],
    date: 'March 2023',
    technologies: 'React, JavaScript, HTML, CSS',
    link: 'https://tusharsawant.netlify.app/',
    GitHub:'https://github.com/tusharsawant04/D-Voting-',
    },
  { 
      title: 'fake product detection',
      description: 'A project I created using PHP HTML CSS SQL',
      images: [],
      date: 'March 2023',
      technologies: 'React, JavaScript, HTML, CSS',
      link: 'https://tusharsawant.netlify.app/',
      GitHub:'https://github.com/tusharsawant04/Detection-of-Counterfeit-Product-using-Blockchain',
      },
      { 
        title: 'note keeper app',
        description: 'A project I created using PHP HTML CSS SQL',
        images: [],
        date: 'March 2023',
        technologies: 'React, JavaScript, HTML, CSS',
        link: 'https://tusharsawant.netlify.app/',
        GitHub:'https://github.com/tusharsawant04/note-keeper-',
        },
        { 
          title: 'react protfolio',
          description: 'A project I created using PHP HTML CSS SQL',
          images: [],
          date: 'March 2023',
          technologies: 'React, JavaScript, HTML, CSS',
          link: 'https://tusharsawant.netlify.app/',
          GitHub:'https://github.com/tusharsawant04/protfolio',
          },
          { 
            title: 'Backend Blog Application',
            description: 'backend api using springBoot',
            images: [],
            date: 'March 2023',
            technologies: 'React, SpringBoot, HTML, CSS',
            link: 'https://tusharsawant.netlify.app/',
            GitHub:'https://github.com/tusharsawant04/Backend-Blog-Application',
            },
            { 
              title: 'crud using javascript',
              description: 'javascript array of object',
              images: [],
              date: 'March 2023',
              technologies: 'React, SpringBoot, HTML, CSS',
              link: 'https://tusharsawant.netlify.app/',
              GitHub:'https://github.com/tusharsawant04/javaScript',
              },

]



const Project = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleProjectClick = (index) => {
    setActiveProjectIndex(index);
    setIsNavbarCollapsed(true);
    const projectElement = document.getElementById(`project-${index}`);
    projectElement.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <div className='container mt-3'>
      <nav className={`navbar-menu ${isNavbarCollapsed ? '' : 'show'}`}>
        <ol>
          {projects.map((project, index) => (
            <li key={index} className={`nav-item ${activeProjectIndex === index ? 'active' : ''}`}>
              <button className="btn btn-link nav-link" onClick={() => handleProjectClick(index)}>{project.title}</button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="row">
        {projects.map((project, index) => (
          <div id={`project-${index}`} className={`col-12 col-md-6 col-lg-4 mb-4`} key={index}>
            <div className={`card h-100 ${activeProjectIndex === index ? 'active' : 'inactive'}`}>
              <div className="card-header">
                <h1 className='font-weight-bold'>{project.title}</h1>
                <p>{project.description}</p>
              </div>
              <Carousel>
                {project.images.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img className="card-img d-block w-100" src={image} alt={`Slide ${idx}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="card-body">
                <h2>Details</h2>
                <ul>
                  <li><strong>Date:</strong> {project.date}</li>
                  <li><strong>Technologies:</strong> {project.technologies}</li>
                  <li><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></li>
                  <li><strong>GitHub:</strong> <a href={project.GitHub} target="_blank" rel="noopener noreferrer">{project.GitHub}</a></li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="floating-ball" onClick={toggleNavbar}>
        ☰
      </div>
    </div>
  );
};
export default Project;
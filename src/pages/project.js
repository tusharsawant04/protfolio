

import React from 'react';

import'./project.css';
import 'react-slideshow-image/dist/styles.css'


const projects = [ 
  { 
  title: 'My Project',
  description: 'A project I created using React',
  image: require('../assests/p11.png'),
  date: 'March 2023',
  technologies: 'React, JavaScript, HTML, CSS',
  link: 'https://example.com/my-project'
  },
  { 
    title: 'My Project',
    description: 'A project I created using React',
    image: 'https://example.com/my-project-image.jpg',
    date: 'March 2023',
    technologies: 'React, JavaScript, HTML, CSS',
    link: 'https://example.com/my-project'
    },

]



const Project = () => {
  return (
    <>
    <div className="flex-container">
    {projects.map((projects, index) => {
      return (
        <div className="project-page">
          <div className="project-header">
            <h1>{projects.title}</h1>
            <p>{projects.description}</p>
          </div>
          <div className="project-image">
            <img src={projects.image} alt={projects.title} />
          </div>
          <div className="project-details">
            <h2>Details</h2>
            <ul>
              <li><strong>Date:</strong> {projects.date}</li>
              <li><strong>Technologies:</strong> {projects.technologies}</li>
              <li><strong>Link:</strong> <a href={projects.link} target="_blank" rel="noopener noreferrer">{projects.link}</a></li>
            </ul>
          </div>
        </div>
      );
    })}
    </div>
    </>
  );
}




  
export default Project;
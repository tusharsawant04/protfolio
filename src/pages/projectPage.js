import React from 'react';
import Project from './project';

const MyProject = () => {
  const projectPage = {
    title: 'My Project',
    description: 'A project I created using React',
    image: 'https://example.com/my-project-image.jpg',
    date: 'March 2023',
    technologies: 'React, JavaScript, HTML, CSS',
    link: 'https://example.com/my-project'
  };

  return (
    <Project projectPage={projectPage} />
  );
}

export default MyProject;
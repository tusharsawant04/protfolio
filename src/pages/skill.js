
import React from 'react';
import { Progress } from 'reactstrap';
import Navbar from '../component/Navbar';

import './skill.css'

const skills = [
  {
    name: 'HTML',
    value: 90,
    color: '#6FAEE5'
  },
  {
    name: 'CSS',
    value: 85,
    color: '#EB8B2D'
  },
  {
    name: 'JavaScript',
    value: 80,
    color: '#F1C232'
  },
  {
    name: 'React',
    value: 75,
    color: '#00BFFF'
  },
  {
    name: 'Node.js',
    value: 70,
    color: '#3C873A'
  }
];
const Skill = () => {
  return (
    <> 
   
  
    <div className="skill-details">
      <h2>Skills</h2>
      <div className="skill-bars">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-progress">
              <Progress color={skill.color} value={skill.value} />
              <div className="skill-value">{skill.value}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
  
export default Skill;
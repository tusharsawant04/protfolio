import React, { Component } from 'react';

import Navbar from '../component/Navbar';
import ts from '../assests/ts.jpg';
import './edu.css';
import tushar from '../assests/clogo.png';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'

class Education extends Component {
  state = {
    education: [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        university: 'University of XYZ',
        year: '2018 - 2022',
        percentage: '85%',
        color: '#8e5ea2',
      },
      {
        id: 2,
        degree: 'Higher Secondary Education',
        university: 'ABC School',
        year: '2016 - 2018',
        percentage: '88%',
        color: '#3cba9f',
      },
      {
        id: 3,
        degree: 'Secondary Education',
        university: 'DEF School',
        year: '2011 - 2016',
        percentage: '90%',
        color: '#e8c3b9',
      },
    ],
    chartData: {
      labels: ['Bachelor of Science', 'Higher Secondary', 'Secondary'],
      datasets: [
        {
          data: [85, 88, 90],
          backgroundColor: ['#8e5ea2', '#3cba9f', '#e8c3b9'],
        },
      ],
    },
  }
render= ()=> { 
  return (
    <div>
  
      <div className="education-details">
        <h2>Education Details</h2>
        <div className="education-cards">
          {this.state.education.map((edu) => (
            <div className="education-card" key={edu.id}>
              <h3>{edu.degree}</h3>
              <p>{edu.university}</p>
              <p>{edu.year}</p>
              <p>{edu.percentage}</p>
            </div>
          ))}
        </div>
     
          
       
      </div>
      </div>
    

  );
}
  }


  
export default Education;
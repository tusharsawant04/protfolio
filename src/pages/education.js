import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './edu.css';
import { Chart, ArcElement } from 'chart.js';

class Education extends Component {
  state = {
    education: [
      {
        id: 1,
        degree: 'Bachelor of Engineer in Computer Engineering',
        university: 'St. John college of Engineering and Management',
        year: '2020 - 2023',
        percentage: '8.62 cgpa',
        color: '#8e5ea2',
        image: 'https://example.com/bachelor_image.jpg',
      },
      {
        id: 2,
        degree: 'COMPUTER ENGINEERING DIPLOMA',
        university: 'Vidyavardhinis Bhausaheb Vartak Polytechnic College',
        year: '2017 - 2020',
        percentage: '89%',
        color: '#3cba9f',
        image: 'https://example.com/diploma_image.jpg',
      },
      {
        id: 3,
        degree: 'Secondary Education',
        university: 'AVS Vidyamandir Virar',
        year: '2017',
        percentage: '90%',
        color: '#e8c3b9',
        image: 'https://example.com/secondary_image.jpg',
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
  };

  componentDidMount() {
    document.body.classList.add('education-page-background');
  }

  componentWillUnmount() {
    document.body.classList.remove('education-page-background');
  }


  render() {

  
    return (
      <>
        <div className="container">
          <h2>Education Details</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 ml-4">
            {this.state.education.map((edu) => (
               <div className="customCard col mb-4" key={edu.id}>
              <div className="card ml-4 d-flex align-items-center ">
                
                <div className="card-body">
                  <h3 className="card-title">{edu.degree}</h3>
                  <p className="card-text text-dark">{edu.university}</p>
                  <p className="card-text text-dark">{edu.year}</p>
                  <p className="card-text text-dark">{edu.percentage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Education;

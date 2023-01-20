

import React from 'react';
import Navbar from '../component/Navbar';
import ts from '../assests/ts.jpg';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import js from '../assests/js.png';
import html from '../assests/htmllogo.png';
import java from '../assests/javalogo.png';
import react from '../assests/reactlogo.png';
import oop from '../assests/oop.png';
import node from '../assests/node.avif';
import dbms from '../assests/dbms.png';
import './skill.css'


const Skill = () => {
  return (
    <> 
   
   <div className='conten'>
   <Card style={{ width: '14rem',height:'14rem' }}>
      <Card.Img style={{ width: '14rem',height:'14rem' }}variant="center" src={java} />
      <Card.Body>
        <Card.Title>java </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem',height:'14rem' }}>
      <Card.Img style={{ width: '14rem',height:'14rem' }}variant="center" src={js} />
      <Card.Body>
        <Card.Title>1 java script</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem',height:'14rem' }}>
      <Card.Img style={{ width: '14rem',height:'14rem' }}variant="center" src={html} />
      <Card.Body>
        <Card.Title>html</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem',height:'14rem' }}>
      <Card.Img style={{ width: '14rem',height:'14rem' }}variant="center" src={react} />
      <Card.Body>
        <Card.Title> React</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card style={{ width: '14rem',height:'14rem' }}>
      <Card.Img style={{ width: '14rem',height:'14rem' }}variant="center" src={dbms} />
      <Card.Body>
        <Card.Title>Dbms</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '14rem',height:'14rem' }}>
      <Card.Img style={{ width: '14rem',height:'14rem' }}variant="center" src={oop} />
      <Card.Body>
        <Card.Title>oop</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '14rem',height:'14rem' }}>
      <Card.Img style={{ width: '14rem',height:'14rem' }}variant="center" src={node} />
      <Card.Body>
        <Card.Title>node</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    

    </div>
    </>
  );
};
  
export default Skill;
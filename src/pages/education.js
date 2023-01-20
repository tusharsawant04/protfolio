

import React from 'react';
import Navbar from '../component/Navbar';
import ts from '../assests/ts.jpg';
import './edu.css';
import tushar from '../assests/clogo.png';


const Education = () => {
  return (
    <> 

   <div className='contenered'>
  
   <table>
   <tr>
    <th>  <img className='imgl' variant="center"  src={tushar} /> BACHLOR DEGREE COMPUTER ENGINEERING </th>
    </tr> 
    <tr>
     <td> B.Tech</td>
     <td>COMPUTER ENGINEERING</td>
    </tr>
    <tr>
      <td>SJCEM</td>
      <td>8.71 CGPI</td>
    </tr>

    <tr>
    <th>DIPLOMA </th>
    </tr>
    <tr>
      <td>POLYTECHNIC DIPLOMA</td>
      <td>COMPUTER ENGINEERING</td>
    </tr>
    <tr>
      <td>VARTK POLLYTECHNIC </td>
      <td>89.03%</td>
    </tr>

    <tr>
    <th>SSC</th>
    </tr>
    <tr>
      <td>MAHARASHTRA BOARD</td>
      <td></td>
    </tr>
    <tr>
      <td>A.V.S VIDDYAMANDIR </td>
      <td>79.80%</td>
    </tr>
    </table> 

    </div>
    </>
  );
};
  
export default Education;
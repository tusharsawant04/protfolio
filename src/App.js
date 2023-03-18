
import Navbar from './component/Navbar';
import Home from './pages/home';


import "./index.css"

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Contact from './pages/contact';
import About from './pages/about';
import Education from './pages/education';
import Skill from './pages/skill';
import Project from './pages/project';
function App() {
  return (
    <>
     <Router>
      
    
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project" element={<Project/>}/>
          
        </Routes>
        
        </Router>
  
  </>
  );
}

export default App;

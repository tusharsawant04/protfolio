
import Navbar from './component/Navbar';
import Home from './pages/home';


import "./index.css";

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Contact from './pages/contact';
import About from './pages/about';
import Education from './pages/education';
import Skill from './pages/skill';
import Project from './pages/project';
import BlogList from './pages/Bloglist';
import DetailBlogPost from './component/DetailBlogPost';
function App() {
  return (
    <>
     <Router>
      <Navbar/>
    
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/blog/:id" element={<DetailBlogPost/>} />
        <Route path="/Bloglist" element={<BlogList/>}/>
          
        </Routes>
        
        </Router>
  
  </>
  );
}

export default App;

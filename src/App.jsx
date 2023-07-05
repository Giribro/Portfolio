import React from 'react';
import { BrowserRouter ,Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    
        
  <BrowserRouter>
         <nav className="navbar">
            <ul className="navbar-nav">
                 <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeclassName="active">
              Home
            </NavLink>
          </li>
          
        <li className="nav-item">
            <NavLink to="/project1" className="nav-link" activeclassName="active">
              Project1
            </NavLink>
          </li>
        <li className="nav-item">
            <NavLink to="/project2" className="nav-link" activeclassName="active">
              Project2
            </NavLink>
          </li>
        <li className="nav-item">
            <NavLink to="/skills" className="nav-link" activeclassName="active">
              Skills
            </NavLink>
          </li>
        <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeclassName="active">
              Contact
            </NavLink>
            </li>
        <li className="nav-item">
            <NavLink to="/a" className="nav-link" activeclassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      
        <div className="content">
            <Routes>
                <Route  path="/" element={<Header/>} ></Route>
                <Route path="/skills" element={<Skills/>} ></Route>
                <Route path="/project1" element={<Project1/>} ></Route>
                <Route path="/project2" element={<Project2/>} ></Route>
                <Route path="/contact" element={<Contact/>} ></Route>
                <Route path="/a" element={<About/>} ></Route>
                
            </Routes>
        <Footer/>    
        </div>
    </BrowserRouter>
  );
}

export default App;

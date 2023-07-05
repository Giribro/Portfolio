import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header-title">
          <Link to="/"></Link>
        </h1>
        <h2 className='infinite-animation'>Welcome To My Portfolio.</h2>
        <h1 className='infinite-animation'>Hi, I am Giridharan.p</h1>
      </header>
      <main>
        {/* Element 1: Apply transition effect */}
        <div className="image-container">
          <p>
            A passionate web developer with a keen interest in front-end development and user experience design.
          </p>
        </div>
        
        {/* Element 2: Apply background color change */}
        <div className="color-change">
          <p>
            On this portfolio website, you will find a showcase of my projects, skills, and experiences. I strive to create beautiful and user-friendly web applications that deliver meaningful experiences.
          </p>
        </div>
        
        {/* Element 3: Apply infinite loop animation */}
        <div className="color-change">
          <p>Feel free to explore my work and get in touch if you have any questions or opportunities for collaboration. Let's create something amazing together!</p>
        </div>

        <div className="image-container">
          <img src="images/G.jpeg" alt="My " className="transition-image" />
        </div>
      </main>
    </>
  );
}

export default Header;

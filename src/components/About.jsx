import React from 'react';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div>
      <h1>About  <Link to="/a"></Link></h1>
      <p>Welcome to the About  of my website!</p>
      <p>
         I am a passionate team of developers dedicated to creating amazing web applications. My goal is to provide
        seamless user experiences and innovative solutions.
      </p>
      <p>Feel free to explore my website and learn more about my projects and services.</p>
    </div>
  );
}

export default About;

import React from 'react';
import './Skill.css';
import { Link } from 'react-router-dom';
function Skills() {
  return (
    <div className="skills">
        <h1><Link to="/skills"></Link></h1>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        <div className="skill-item">HTML</div>
        <div className="skill-item">CSS</div>
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">React</div>
      </div>
    </div>
  );
}

export default Skills;

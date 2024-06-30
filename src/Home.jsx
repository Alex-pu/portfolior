// Home.jsx

import React, { useEffect, useRef } from 'react';
import './home.css';
import menuIcon from './assets/menu.png';
import heroImage from './assets/hero.jpg';
import skillIcon from './assets/react.png'; // Example skill image
import projectImage1 from './assets/hero.png'; // Example project image
import projectImage2 from './assets/hero.png'; // Example project image
import projectImage3 from './assets/hero.png'; // Example project image

const Home = () => {
  const bioRef = useRef(null);

  useEffect(() => {
    const bioText = "I am at my entry level, but my current industrial attachment has helped me gain insight into the growing world of tech...";
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < bioText.length) {
        bioRef.current.textContent += bioText.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const toggleMenu = () => {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>Alex Kamau</h1>
        <p className="p">(Bsc Computer Science. Pwani University)</p>
        <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />
        <ul className="navigation">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <section className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-img" />
        <div className="bio-container">
          <h2 className="bio-title">Bio</h2>
          <p className="bio-text" ref={bioRef}></p>
        </div>
      </section>
      
      <section className="more-about" id="about">
        <h2>More About Me</h2>
        <div className="about-content">
          <p>I am passionate about technology and always eager to learn new skills...</p>
        </div>
      </section>
      
      <section className="skills-section" id="skills">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-container">
          <div className="skill-card">
            <img src={skillIcon} alt="Skill" className="skill-icon" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <img src={skillIcon} alt="Skill" className="skill-icon" />
            <p>Node.js</p>
          </div>
          <div className="skill-card">
            <img src={skillIcon} alt="Skill" className="skill-icon" />
            <p>SQL</p>
          </div>
          <div className="skill-card">
            <img src={skillIcon} alt="Skill" className="skill-icon" />
            <p>QGIS</p>
          </div>
        </div>
      </section>
      
      <section className="projects-section" id="projects">
        <h2 className="projects-title">Some of my Recent Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src={projectImage1} alt="Project" className="project-pic" />
            <h3 className="project-title">Project 1</h3>
            <p className="project-details">Description of Project 1...</p>
            <a href="https://github.com/Alex-pu/project1" target="_blank" rel="noreferrer" className="project-link">Check it Out!</a>
          </div>
          <div className="project-card">
            <img src={projectImage2} alt="Project" className="project-pic" />
            <h3 className="project-title">Project 2</h3>
            <p className="project-details">Description of Project 2...</p>
            <a href="https://github.com/Alex-pu/project2" target="_blank" rel="noreferrer" className="project-link">Check it Out!</a>
          </div>
          <div className="project-card">
            <img src={projectImage3} alt="Project" className="project-pic" />
            <h3 className="project-title">Project 3</h3>
            <p className="project-details">Description of Project 3...</p>
            <a href="https://github.com/Alex-pu/project3" target="_blank" rel="noreferrer" className="project-link">Check it Out!</a>
          </div>
        </div>
      </section>
      
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-control">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <div className="form-control">
              <input type="submit" value="Send" />
            </div>
          </form>
          <p className="contact-info-blink">alex.kamau@example.com</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

// Home.jsx

import React, { useState, useEffect, useRef } from 'react';
import './home.css';
import menuIcon from './assets/menu.png';
import heroImage from './assets/hero.jpg';
import projectImage1 from './assets/data.png';
import projectImage2 from './assets/web.png';
import projectImage3 from './assets/map.png'; // Example project image
import skillIcon from './assets/react.png'; // Example skill image
import skill2Icon from './assets/q.png'; // Example skill image
import skill3Icon from './assets/node.png'; // Example skill image
import skill6Icon from './assets/sql.png'; // Example skill image
import skill4Icon from './assets/git.png'; // Example skill image
import skill5Icon from './assets/python.png'; // Example skill image
import x from './assets/x.png';
import Github from './assets/github.png';
import Phone from './assets/phone.png'
import Pop from './Pop';




const Home = () => {
  const bioRef = useRef(null);

  useEffect(() => {
    const bioText = "I'm Alex Kamau, a passionate and enthusiastic developer fueled by an insatiable curiosity  and a love for continuous learning. ";
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


  const [showAlert, setShowAlert] = useState(false);

  const pop = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000); // Close the alert after 5 seconds
  };
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>Alex Kamau</h1>
        <div className="x-div">
        
        <a href="https://twitter.com/kamaualecs?t=ZBCvkqBjkIPC5jcXaBvAuA&s=08" target="_blank" rel="noreferrer"  className="contact-info-blink"><img src={x} alt="X" className='x'/></a>
        <a href="https://github.com/Alex-pu/" target="_blank" rel="noreferrer"  className="contact-info-blink"><img src={Github} alt="github" className='x'/></a>
        <a href="" target="_blank" rel="noreferrer"  onClick={pop} className="contact-info-blink"><img src={Phone} alt="github" className='x'/></a>



        </div>
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
        
        <p className="contact-info-blink">Experience
        May 2023 - Jul 2023</p>

          <p> 
          I have been collaborating with different individuals mostly chipping
          in for the backend development.I also work on personal projects mostly centered around
          automation of common tasks.<br/><br/>
Internship Trainee 
Dunia Moja Community Network
I was tasked with training community members on digital literary,
training of trainers and maintaining the network infrastructure. We
also conducted tests on viability of Tv white space technology in the
rural areas.<br/><br/>

</p>
<p className="contact-info-blink">Education
2020 – 2024
Pwani university
Bachelor of Science - B.Sc, Compute science
Second Class Upper</p>

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
            <img src={skill2Icon} alt="Skill" className="skill-icon" />
            <p>QGIS</p>
          </div>
          <div className="skill-card">
            <img src={skill3Icon} alt="Skill" className="skill-icon" />
            <p>Node js</p>
          </div>
          <div className="skill-card">
            <img src={skill4Icon} alt="Skill" className="skill-icon" />
            <p>SQL</p>
          </div>
          <div className="skill-card">
            <img src={skill6Icon} alt="Skill" className="skill-icon" />
            <p>Git.</p>
          </div>
         
          <div className="skill-card">
            <img src={skill5Icon} alt="Skill" className="skill-icon" />
            <p>Data analysis</p>
          </div>
        </div>
      </section>
      
      <section className="projects-section" id="projects">
        <h2 className="projects-title">Some of my Recent Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src={projectImage1} alt="Project" className="project-pic" />
            <h3 className="project-title">2022 Kenyan Election analysis</h3>
            <p className="project-details">Data nalysis projects on google Colabs...</p>
            <a href="https://github.com/Alex-pu/project1" target="_blank" rel="noreferrer" onClick={pop} className="project-link" >Check it Out!</a>
          </div>
          <div className="project-card">
            <img src={projectImage2} alt="Project" className="project-pic" />
            <h3 className="project-title">React Projects</h3>
            <p className="project-details">A collection of frontend repositories...</p>
            <a href="https://github.com/Alex-pu/project2" target="_blank" rel="noreferrer" onClick={pop} className="project-link">Check it Out!</a>
          </div>
          <div className="project-card">
            <img src={projectImage3} alt="Project" className="project-pic" />
            <h3 className="project-title">GIS Projects</h3>
            <p className="project-details">A collection of maps made uing QGIS...</p>
            <a href="https://github.com/Alex-pu/project3" target="_blank" rel="noreferrer" onClick={pop} className="project-link">Check it Out!</a>
          </div>
        </div>
        {showAlert && <Pop onClose={() => setShowAlert(false)} />}

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
          <p className="contact-info-blink">kamaua175@gmail.com</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

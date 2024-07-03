import React from 'react';
import './pop.css';

const Pop = ({ onClose }) => {
  return (
    <div className="soon-overlay" onClick={onClose}>
      <div className="soon-container">
        <h2 className="soon-title">Coming soon...meanwhile get in touch!</h2>
        <p className="soon-contact">
          Email: <span className="blink-text">kamaua175@gmail.com</span> <br/> Phone: <span className="blink-text">(254) 704-813-341</span>
        </p><br/>
        <p className="soon-contact">
          Github: <span className="blink-text">github.com/Alex-pu/</span> <br/>X: <span className="blink-text">@kamaualecs</span>
        </p>     
         </div>
    </div>
  );
};

export default Pop;

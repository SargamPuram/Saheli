import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Banner() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleTakeTestClick = () => {
    navigate('/predict'); // Redirect to the Predict page
  };

  return (
    <section className="banner">
      <div className="banner-text">
        <h4>#positivelyunashamed that I have Pcos!</h4><br />
        <h1>Let’s Fight Together with <br /><h2 className="highlight">PCOS</h2></h1><br />
        <button className="download-btn" onClick={handleTakeTestClick}>TAKE TEST</button>
      </div>
      <div className="banner-img">
        <img src="DOC.jpg" alt="Doctor consultation" style={{ height: '400px', width: '100%' }} />
      </div>
    </section>
  );
}

export default Banner;

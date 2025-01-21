import React from 'react';

function Features() {
  return (
    <section className="features">
      <h2>OUR FEATURES</h2>
      <div className="feature-box">
        <div className="features-grid">
          <div className="feature-item"><img src="pic1.png" alt="Doctor Consultation" onClick={() => window.open("https:google.com", "_blank")}/></div>
          <div className="feature-item"><img src="pic2.png" alt="Buy Medicines" onClick={() => window.open("https:google.com", "_blank")} /></div>
          <div className="feature-item"><img src="pic3.png" alt="Keep Records" onClick={() => window.open("https:google.com", "_blank")}/></div>
          <div className="feature-item"><img src="pic4.png" alt="Lab Test Booking" onClick={() => window.open("https:google.com", "_blank")} /></div>
          <div className="feature-item"><img src="pic5.png" alt="Diet & Exercise"onClick={() => window.open("https:google.com", "_blank")} /></div>
          <div className="feature-item"><img src="pic6.png" alt="Pcos Community" onClick={() => window.open("https:google.com", "_blank")}/></div>
        </div>
      </div>
    </section>
  );
}

export default Features;

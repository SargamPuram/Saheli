import React from 'react';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <h4>#positivelyunashamed that I have Pcos!</h4><br />
        <h1>Let’s Fight Together with <br /><h2 className="highlight">PCOS</h2></h1><br />
        <button className="download-btn">TAKE TEST</button>
      </div>
      <div className="banner-img">
        <img src="DOC.jpg" alt="Doctor consultation" style={{ height: '400px', width: '100%' }} />
      </div>
    </section>
  );
}

export default Banner;

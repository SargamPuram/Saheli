import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
  <div className='Navbar'>
    
    <div className='outItem'>
    <div className='Name'>SAHELI</div>
    <div className='item'>
    <div className='nav-item'><a href="#home">HOME</a></div>
    <div className='nav-item'><a href="#about">ABOUT</a></div>
    <div className='nav-item'><a href="#services">SERVICES</a></div>
    <div className='nav-item'><a href="#articles">ARTICLES</a></div>
    <div className='nav-item'><a href="#refer">REFER US</a></div>
    </div>
    </div>
  </div>
</header>

      
      <main>
        <section className="banner">
          <div className="banner-text">
          <h4>#positivelyunashamed that I have Pcos!</h4><br></br>
          <h1>Let’s Fight Together with <br></br><h2 className="highlight">PCOS</h2></h1><br></br>
          <button className="download-btn">TAKE TEST</button></div>
          <div className="banner-img">
          <img src="DOC.jpg" alt="Doctor consultation" style={{ height: '400px', width: '100%' }} />
            {/* <img src="DOC.jpg" alt="Doctor consultation"/> */}
          </div>
        </section>
        <section className="features">
          <h2>OUR FEATURES</h2>
          <div className="feature-box">
          <div className="features-grid">
            <div className="feature-item">
              <img src="pic1.png" alt="Doctor Consultation" />
              
            </div>
            <div className="feature-item">
              <img src="pic2.png" alt="Buy Medicines" />
              
            </div>
            <div className="feature-item">
              <img src="pic3.png" alt="Keep Records" />
              
            </div>
            <div className="feature-item">
              <img src="pic4.png" alt="Lab Test Booking" />
              
            </div>
            <div className="feature-item">
              <img src="pic5.png" alt="Diet & Exercise" />
              
            </div>
            <div className="feature-item">
              <img src="pic6.png" alt="Pcos Community" />
              
            </div>
          </div>
          </div>
        </section>
        <section className="articles">
          <div className='art'>
          <h3>Read Top Articles From </h3>
          <h2 className='exp'>TOP EXPERTS</h2>
          <button className="articles-btn">See all Articles</button>
          </div>
          <div className="illustration">
            <img src="check.png" alt="Health expert consultation" />
          </div>
          
        </section>

        <section className='testimonials'>
          <div className='ttml'>
          <h2>TESTIMONIALS</h2>
          <h3>What our Users are saying </h3>
          <h3>about us!!!</h3><br></br>
          <div className='outfeed'>
          <div className='feedback'>
          <div className='user'>
          <h4>Sakshi 26</h4>
          </div>
          <div className='user'>
            <h4>Rashmi 23</h4>
          </div>
          <div className='user'>
          <h4>Rashmi 25</h4>
          </div>
          </div>
          </div>

          </div>
        </section>

        <footer class="footer"> 
          <div className="footer-content">
          <ul class="footer-links"> 
            <li><a href="#join-our-team">Join our Team</a></li>
             <li><a href="#contact-us">Contact Us</a></li> <li>
              <a href="#register">Register</a></li>
               <li><a href="#our-policies">Our Policies</a></li> 
               </ul> 
               </div>
               </footer>
      </main>
    </div>
  );
}

export default App;

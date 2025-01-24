import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="ttml">
        <h2>TESTIMONIALS</h2>
        <h3>What our Users are saying </h3>
        <h3>about us!!!</h3><br />
        <div className="outfeed">
          <div className="feedback">
            <div className="user">
              <h4><b>Sakshi 26</b></h4>
              <br></br>
              <p>
              I've been using this app for a few months now and I'm really impressed with how easy it is to use and how helpful it has been for tracking my health.
              </p>
              </div>
            <div className="user"><h4><b>Rashmi 23</b></h4>
            <br></br>
            <p>This app has been a game-changer for me. I've been able to connect with a great community of people and learn so much about managing my health.</p></div><br></br>
            <div className="user"><h4><b>Rashmi 25</b></h4><br></br>
            <p>I love the convenience of being able to book appointments and order medications all in one place. This app has saved me so much time!
              </p></div>
          </div>
          <br></br>
        </div>
      </div>
      <br></br>
    </section>
  );
}

export default Testimonials;

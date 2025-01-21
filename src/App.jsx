import React from 'react';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import Features from './Features.jsx';
import Articles from './Articles.jsx';
import Testimonials from './Testimonials.jsx';
import Footer from './Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <Features />
        <Articles />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

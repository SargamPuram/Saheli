import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Articles from './components/Articles';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
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

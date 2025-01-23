import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Predict from './components/Predict.jsx';
import Home from './pages/Home.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <BrowserRouter>
    
    <div className="h-screen">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<Predict />} />
      <Route path="/about" element={<About />} />
    </Routes>
      <Footer />
    </div>
   
      </BrowserRouter>
  );
}

export default App;

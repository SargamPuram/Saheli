import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate(); // Declare the navigate function

  const handleHomeTestClick = () => {
    navigate('/'); // Redirect to the home page
  };
  const handleAboutTestClick = () => {
    navigate('/about'); // Redirect to the home page
  };

  return (
    <header className="App-header">
      <div className="Navbar">
        <div className="outItem">
          <div className="Name cursor-pointer onClick={handleHomeTestClick}">SAHELI</div>
          <div className="item">
            <div className="nav-item cursor-pointer" onClick={handleHomeTestClick}>HOME</div>
            <div className="nav-item cursor-pointer" onClick={handleAboutTestClick}>ABOUT</div>
            <div className="nav-item"><a href="#services">SERVICES</a></div>
            <div className="nav-item"><a href="#articles">ARTICLES</a></div>
            <div className="nav-item"><a href="#refer">REFER US</a></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

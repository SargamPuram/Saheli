import React from 'react';

function Navbar() {
  return (
    <header className="App-header">
      <div className="Navbar">
        <div className="outItem">
          <div className="Name">SAHELI</div>
          <div className="item">
            <div className="nav-item"><a href="#home">HOME</a></div>
            <div className="nav-item"><a href="#about">ABOUT</a></div>
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

import React from 'react';
import '../style.css'; 

function Navbar({ onNavbarItemClick, isNavbarOpen, toggleNavbar }) {
    const handleItemClick = (content) => {
      onNavbarItemClick(content);
    };
  
    return (
    <div id="nav-bar">
         <input id="nav-toggle" type="checkbox" checked={isNavbarOpen} onChange={toggleNavbar} />
      
      <div id="nav-header">
        <a id="nav-title" href="#" >
          BirQadam
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
         <div className="nav-button" onClick={() => handleItemClick('Басты бет')}>
            <i className="fas fa-palette"></i>
            <span>Басты бет</span>
        </div>
        <div className="nav-button"  onClick={() => handleItemClick('Курстар')}>
          <i className="fas fa-images"></i>
          <span>Курстар</span>
        </div>
        <div className="nav-button"  onClick={() => handleItemClick('Тесттер')}>
          <i className="fas fa-thumbtack"></i>
          <span>Тесттер</span>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-heart"></i>
          <span>Жетістіктерім</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-chart-line"></i>
          <span>Тапсырмалар</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-fire"></i>
          <span>Материалдар</span>
        </div>
        <div className="nav-button">
          <i className="fas fa-magic"></i>
          <span>Жетекшілер</span>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-gem"></i>
          <span>Рейтинг</span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="avatar" />
          </div>
          <div id="nav-footer-titlebox">
            <a id="nav-footer-title" href="https://codepen.io/uahnbu/pens/public">
              uahnbu
            </a>
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
}

export default Navbar;

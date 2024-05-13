import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CourseDetails from './components/CourseDetails';

function App() {
  const [selectedContent, setSelectedContent] = useState('');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarItemClick = (content) => {
    setSelectedContent(content);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <Navbar onNavbarItemClick={handleNavbarItemClick} isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <div className={`selected_content ${isNavbarOpen ? 'navbar-opened' : ''}`}>
        {selectedContent}
        <CourseDetails/>
      </div>
    </div>
  );
}

export default App;


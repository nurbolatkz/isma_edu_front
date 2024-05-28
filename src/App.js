import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SubjectsDetail from "./components/SubjectsDetail";

function App() {
  const [selectedContent, setSelectedContent] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarItemClick = (content) => {
    setSelectedContent(content);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <Navbar
        onNavbarItemClick={handleNavbarItemClick}
        isNavbarOpen={isNavbarOpen}
        toggleNavbar={toggleNavbar}
      />

      <SubjectsDetail />
    </div>
  );
}

export default App;

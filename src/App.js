import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SubjectsDetail from "./components/SubjectsDetail";
import SubjectList from "./components/SubjectList";

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
    <Router>
      <div>
        <Navbar
          onNavbarItemClick={handleNavbarItemClick}
          isNavbarOpen={isNavbarOpen}
          toggleNavbar={toggleNavbar}
        />
        <Routes>
          <Route path="/subjects" element={<SubjectList />} />
          <Route path="/subjects/:subjectId" element={<SubjectsDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

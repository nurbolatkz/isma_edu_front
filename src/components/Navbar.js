import React from "react";
import "../style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarContainer({ onNavbarItemClick, isNavbarOpen, toggleNavbar }) {
  const handleItemClick = (content) => {
    onNavbarItemClick(content);
  };

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">BirQadam.kz</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Басты бет</Nav.Link>
          <Nav.Link href="#features">Пәндер</Nav.Link>
          <Nav.Link href="#pricing">Тесттер</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaHeartbeat } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <FaHeartbeat className="text-primary me-2" size={30} />
          <span className="fw-bold text-primary">Health Clinic</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact" className="btn btn-primary text-white ms-2 px-3">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

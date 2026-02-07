import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-primary mb-3">Health Clinic</h5>
            <p className="text-muted">
              Your partner in wellness and personal development. 
              We provide a modern, calming digital experience for your health journey.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="#services" className="text-muted text-decoration-none">Services</a></li>
              <li><a href="#about" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#blog" className="text-muted text-decoration-none">Blog</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h6 className="text-white mb-3">Connect With Us</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted" aria-label="Visit our Facebook page"><FaFacebook size={24} /></a>
              <a href="#" className="text-muted" aria-label="Follow us on Twitter"><FaTwitter size={24} /></a>
              <a href="#" className="text-muted" aria-label="Follow us on Instagram"><FaInstagram size={24} /></a>
              <a href="#" className="text-muted" aria-label="Connect on LinkedIn"><FaLinkedin size={24} /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-secondary my-4" />
        <Row>
          <Col className="text-center text-muted">
            <p className="mb-0">&copy; {new Date().getFullYear()} Health Clinic. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

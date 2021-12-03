import React from 'react';
import '../styles/Navigationbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Navigationbar() {
  return (
    <Navbar className="navigation" expand="lg">
      <Container justify-content>
        <Navbar.Brand href="#home"><div className="name">Laxmi Sharma</div></Navbar.Brand>
        <div className="menu">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="meAuto" expand="lg">
              <Link to="/about">About</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}



export default Navigationbar;
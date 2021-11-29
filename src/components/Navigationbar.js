import React from 'react';
import '../styles/Navigationbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigationbar() {
  return (
    <Navbar className="navigation" expand="lg">
      <Container justify-content>
        <Navbar.Brand href="#home"><div className="name">Laxmi Sharma</div></Navbar.Brand>
        <div className="menu">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="meAuto" expand="lg">
              <Nav.Link href="/about">About </Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}



export default Navigationbar;
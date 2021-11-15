import React from 'react';
import '../styles/Navigationbar.css';
import { Navbar, Nav, Container } from "react-bootstrap";

// const styles = {
//     navbarStyle: {
//       background: 'green',
//       justifyContent: 'flex-end',
//     },
//   };

function Navigationbar() {
  return (
    <Navbar className="navigation" expand="lg">
      <Container justify-content>
        <Navbar.Brand href="#home">Laxmi Sharma</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
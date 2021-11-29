import React from "react"
import { Card } from "react-bootstrap";
import '../styles/Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer(props) {
  return (
    <footer className="foot">
      <div className="container text-center mb-5">
      <Card.Link href="https://github.com/laxminla" target="_blank"><FaGithub /></Card.Link>
      <Card.Link href="https://www.linkedin.com/in/laxmi-sharma-40057a20b/" target="_blank"><FaLinkedinIn /></Card.Link>
        <h4>&copy; {new Date().getFullYear()} - Laxmi Sharma</h4>
      </div>
    </footer>
  )
}

export default Footer;





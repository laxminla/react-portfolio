import React from "react"
import { Container } from "react-bootstrap";
import "../styles/About.css";
// import laxmiresume from "../assets/Resume-2021.pdf";
// import { Document } from 'react-pdf/dist/esm/entry.webpack';

function Resume() {
  return (
    <Container>
      <div className="content">
        <h>Download <a href="https://docs.google.com/document/d/1fFNkbJcogGRFGOO956hapHXQQ0CSFhMjZtNa62dwafY/edit?usp=sharing" target="_blank">my resume</a></h>
      </div>

    </Container>
  )
}

export default Resume;
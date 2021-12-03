import React from "react"
import { Container } from "react-bootstrap";
import "../styles/About.css";
// import laxmiresume from "../assets/Resume-2021.pdf";
// import { Document } from 'react-pdf/dist/esm/entry.webpack';

function Resume() {
  return (
    <Container>
      <h1 className="main">Resume</h1>
      <div className="cont">
        <h>Download <a href="https://docs.google.com/document/d/1fFNkbJcogGRFGOO956hapHXQQ0CSFhMjZtNa62dwafY/edit?usp=sharing" target="_blank" rel="noreferrer">my resume</a></h>
      </div>
      <div>
        <p>Front-End Profiencies
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java Script</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </p>
        <p>Back-End Profiencies
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </p>
      </div>
    </Container>
  )
}

export default Resume;
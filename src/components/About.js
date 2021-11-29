import React from "react"
import { Container } from "react-bootstrap";
import "../styles/About.css";
import picture from "../assets/Profile.JPG"
// import { Card } from "react-bootstrap";

function About(props) {
  return (
    <Container>
      <div className="profile">
        <h1 className="title">About</h1>
        <div className="image">
          <img src={picture} width='300' height='240' alt="cool" />
        </div>
        <div>
          <p className="message"> Full stack web developer in training from UC Davis Boot Camp. Experience in designing projects using tools and technologies learned through class activities and outside researches. Innovative problem-solver, passionate about developing apps; focused on mobile first-design and development. Strengths in creativity, teamwork. Strong ability to create, design, and maintain websites from conception to production. </p>
        </div>
      </div>
    </Container >
  )
}

export default About;

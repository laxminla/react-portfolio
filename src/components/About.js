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
          <p className="message">I am a Full Stack Web Developer. My background is in Health Information Technology. I have five years of working experience as a distant electronic medical Record Technician. I was responsible to review medical records and organize data while checking it for accuracy and clarity. I also coded patients’ dates for medical reimbursement while doing my externship at St.John's Episcopal hospital, NY.  I understand data security and privacy while working closely with someone’s records.
            As a Full-Stack Web Developer, I can handle the client-side as well as the server-side web application. I have learnt various technical skills necessary to create full stack web application through the short period of Boot camp classes such as: Html, CSS, Javascript, REST APIs, Mongoose, GraphQL, MySQL, NoSQL, handlebars, Node JS, and Express. I have a strong ability to create, design, and maintain websites from conception to production. I am detail focused and an ambitious problem solver with a passion for learning new skills.
          </p>
        </div>
      </div>
    </Container >
  )
}

export default About;

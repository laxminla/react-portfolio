import React from "react"
import "../styles/About.css";
import picture from "../assets/Profile.JPG"
import { Card } from "react-bootstrap";
function About(props) {
  return (
      <div className="about">
      <h1>About</h1>
      <img src={picture} width='200' alt="cool" />
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.</p>
      </div>
  )
}

export default About;

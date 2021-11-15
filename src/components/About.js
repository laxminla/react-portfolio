import React from "react"
import "../styles/About.css";
import picture from "../assets/Profile.JPG"
function About(props) {
  return (
    <div className="about">
      <h1>About</h1>
      <img src={picture} width='500' />
      <p>Working as an electronic medical record technician remotely has proven as a successful
        employee with great passion about work utilizing skills learned through education and
        challenges. Changed career in web development sets skills on programming languages to
        understand how a user interacts with a server and produces data. Experience in
        developing applications using technical skills gained from varieties of web related
        languages, applications and tools. Well time management skills, strengths on creativity,
        ability to dig in depth innovates productive projects with great ideas for industry and
        technological trends.</p>
    </div>
  )
}

export default About;
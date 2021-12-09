import React from "react"
import picture from "../assets/FitnessT.jpg";
import picture1 from "../assets/VideoG.png";
import ecommerce from "../assets/Ecommerce.png";
import dayplanner from "../assets/Dayplanner.png";
import notetaker from "../assets/Budget.png";
import employeems from "../assets/EmployeeMS.jpg";
import { CardGroup, Card, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

function Portfolio(props) {
  return (
    <Container>
      <h1>Portfolio</h1>
      <CardGroup >
        <Card>
          <Card.Img variant="top" img src={picture} width='150' />
          <Card.Body>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Text>
              The workout Tracker app uses a NoSQL database. It allows users to keep track of daily workouts and their progress. The user can log multiple exercises in a workout every day. When the user loads an app, the landing page gives the option to create a new workout or continue with the last workout.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/workout-tracker.git" target="_blank"><FaGithub /></Card.Link>
            <Card.Link href="https://calm-ravine-53409.herokuapp.com/">Walkthrough video</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" img src={ecommerce} width='150' />
          <Card.Body>
            <Card.Title>E-commerce Back End</Card.Title>
            <Card.Text>
              E-commerce is server side application which uses Express.js API and Sequalize to interact with MYSQL database. This application demonstartes API routes to perform updates and changes.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/E-commerce.git" target="_blank"><FaGithub /></Card.Link>
            <Card.Link href="https://watch.screencastify.com/v/b6mYrLrCbEWbxpcfsn50">Walkthrough Video</Card.Link>
            <Card.Link href="https://watch.screencastify.com/v/SyYzUEOVRhg3ONCOaP1T">Walkthrough Video</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={picture1} width='150' />
          <Card.Body>
            <Card.Title>Video Generator</Card.Title>
            <Card.Text>
              Video generator that displays and plays videos from different video platforms depending on what you search for.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/video-generator.git" target="_blank"><FaGithub /></Card.Link>
            <Card.Link href="https://laxminla.github.io/video-generator/">Deployed App</Card.Link>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" img src={dayplanner} width='150' />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
              This is the progressive web application that allows user to be able to add deposits and expenses to their budget with or without internet. When entering transactions offline, they should populate the total when brought back online.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/budget-trackers.git" target="_blank"><FaGithub /></Card.Link>
            <Card.Link href="https://sheltered-ridge-79430.herokuapp.com/">Walkthrough Video</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" img src={notetaker} width='150' />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              This is a note taker application which allows user to add, view saved notes and delete notes if the user want to delete it. This is a backend application which uses express js.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/note-taker.git" target="_blank"><FaGithub /></Card.Link>
            <Card.Link href="https://github.com/laxminla/note-taker.git">Linkdin</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" img src={employeems} width='150' />
          <Card.Body>
            <Card.Title>Employee Management System</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/employee-tracker.git">Github</Card.Link>
            <Card.Link href="https://github.com/laxminla/employee-tracker.git">Linkdin</Card.Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Container>
  )
}
export default Portfolio;
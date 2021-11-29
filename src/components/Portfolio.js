import React from "react"
import picture from "../assets/FitnessT.jpg";
import picture1 from "../assets/PasswordG.png";
import ecommerce from "../assets/Ecommerce.png";
import dayplanner from "../assets/Dayplanner.png";
import notetaker from "../assets/Notetaker.png";
import employeems from "../assets/EmployeeMS.jpg";
import { CardGroup, Card, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

function Portfolio(props) {
  return (
    <Container>
      <h1>Portfolio</h1>
      <CardGroup >
        <Card>
          <Card.Img variant="top" img src={picture} width='200' />
          <Card.Body>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/workout-tracker.git" target="_blank"><FaGithub /></Card.Link>
            <Card.Link href="https://calm-ravine-53409.herokuapp.com/" target="_blank"><FaGithub /></Card.Link>
            <Card.Link href="https://github.com/laxminla/workout-tracker.git">Linkdin</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" img src={ecommerce} width='200' />
          <Card.Body>
            <Card.Title>E-commerce Back End</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/E-commerce.git">Hithub</Card.Link>
            <Card.Link href="https://github.com/laxminla/E-commerce.git">Linkdin</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={picture1} width='200' />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/password-generator.git">Github</Card.Link>
            <Card.Link href="https://github.com/laxminla/password-generator.git">Linkdin</Card.Link>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Img variant="top" img src={dayplanner} width='200' />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/budget-trackers.git">Github</Card.Link>
            <Card.Link href="https://github.com/laxminla/budget-trackers.git">Linkdin</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" img src={notetaker} width='200' />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
              facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
              fuga dolore.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href="https://github.com/laxminla/note-taker.git">Github</Card.Link>
            <Card.Link href="https://github.com/laxminla/note-taker.git">Linkdin</Card.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" img src={employeems} width='200' />
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
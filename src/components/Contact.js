import React, { useState } from "react";
import { validateEmail } from "../utils/helper.js";
import { Form, Button, Container } from "react-bootstrap"

function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errMessage, setErrMessage] = useState('');
  const { name, email, message } = state;

  const handleSubmit = (e) => {
    console.log(name, email, message)
    e.preventDefault();
    if (!errMessage) {
      console.log('Submit Form, state');
    }
  };
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = true;
      console.log('email ', e.target.value)
      console.log(isValid)
      if (!isValid) {
        setErrMessage('Invalid Email');
      } else {
        setErrMessage('');
      }
    } else {
      if (e.target.value.length === 0) {
        setErrMessage(`${e.target.name} is required`);
      } else {
        setErrMessage('');
      }
    }
    if (!errMessage) {
      setState({ ...state, [e.target.name]: e.target.value });
      console.log('Handle Form', state)
    }
  }
  return (
    <Container>
      <h1>Contact</h1>
      <Form id="contact-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" value={name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" placeholder="Message" value={message} style={{ height: "200px" }} onChange={handleChange} />
        </Form.Group>
        <Button onClick={handleSubmit}>Submit </Button>
      </Form>
      {errMessage && (
        <div>
          <p className="error-text">{errMessage}</p>
        </div>
      )}
    </Container>
  );


}


export default Contact;
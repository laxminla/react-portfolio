import React, { useState } from "react";
// import { validateEmail } from "../utils/helper.js";
import { Form, Button, Container } from "react-bootstrap"

function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errMessage, setErrMessage] = useState('');
  const [nameErrMessage, setNameErrMessage] = useState('');
  const [emailErrMessage, setEmailErrMessage] = useState('');
  const [messageErrMessage, setMessageErrMessage] = useState('');
  const { name, email, message } = state;

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true);
    }
    return (false);
  };

  const handleSubmit = (e) => {
    // console.log(name, email, message)
    e.preventDefault();
    let error;

    if (!name) {
      setNameErrMessage('Invalid name');
    }

    if (!email || !validateEmail(email)) {
      setEmailErrMessage('Invalid email');
    }

    if (!message) {
      setMessageErrMessage('Invalid message');
    }

    if (!nameErrMessage && !emailErrMessage && !messageErrMessage) {
      console.log('Submit Form, state');
      setState({ 
        name: '',
        email: '',
        message: ''
      });
    }
  };

  const handleChange = (e) => {
    if (e.target.value.length === 0) {
      setErrMessage(`${e.target.name} is required`);
    } else {
      setErrMessage('');
      if (e.target.name === 'name') {
        setNameErrMessage('');
      } else if (e.target.name === 'email') {
        setEmailErrMessage('');
      } else {
        setMessageErrMessage('');
      }
    }

    if (!errMessage) {
      setState({ ...state, [e.target.name]: e.target.value });
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
      {nameErrMessage && (
        <div>
          <p className="error-text">{nameErrMessage}</p>
        </div>
      )}
      {emailErrMessage && (
        <div>
          <p className="error-text">{emailErrMessage}</p>
        </div>
      )}
      {messageErrMessage && (
        <div>
          <p className="error-text">{messageErrMessage}</p>
        </div>
      )}

    </Container>
  );


}


export default Contact;
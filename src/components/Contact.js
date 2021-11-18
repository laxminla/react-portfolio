import React, { useState } from "react";
import { validateEmail } from "../utils/helper.js";
import { Form } from "react-bootstrap"

function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errMessage, setErrMessage] = useState('');
  const { name, email, message } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errMessage) {
      console.log('Submit Form, state');
    }
  };
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrMessage('Invalid Email');
      } else {
        setErrMessage('');
      }
    } else {
      if (!e.target.value.length) {
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
    <div>
      <Form id="contact-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" value={name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control type="message" name="message" placeholder="Message" value={message} onChange={handleChange} />
        </Form.Group>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </Form>
      {errMessage && (
        <div>
          <p className="error-text">{errMessage}</p>
        </div>
      )}
    </div>
  );


}


export default Contact;
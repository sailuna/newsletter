import { Button, Col, Row, Form, Container } from "react-bootstrap"
import React, { useState } from "react"
import axios from "axios"

const FormValidation = () => {
  const [validated, setValidated] = useState(false)
  const [name, setName] = useState(null)
  const [fullname, setFullname] = useState(null)
  const [email, setEmail] = useState(null)

  const handleSubmit = event => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    console.log(name, fullname, email)

    axios({
      method: "post",
      url: "http://localhost:3001",
      data: {
        name: name,
        fullname: fullname,
        email: email,
      },
    })
      .then(() => {
        setValidated(true)
      })
      .catch(err => {
        console.log(err)
        setValidated(false)
      })
  }

  const handleChange = e => {
    const target = e.target
    var value = target.value
    const name = target.name

    if (name === "name") {
      setName(value)
    }
    if (name === "fullname") {
      setFullname(value)
    }
    if (name === "email") {
      setEmail(value)
    }
  }

  return (
    <Container>
      <Row
        className={validated ? "my-5 d-none" : "my-5"}
      >
        <Col lg={10} className="mx-auto text-center my-5">
          <h1>Register to Newsletter</h1>
        </Col>
        <Col lg={10} className="mx-auto text-center">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  pattern="([A-Za-z]{2,})?"
                  onChange={handleChange}
                  name="name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  pattern="([A-Za-z]{2,})?"
                  name="fullname"
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" variant="primary" size="lg" className="w-100">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className={!validated ? "my-5 d-none" : "my-5"}>
        <Col>
          <h1>Succesfully registered</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default FormValidation

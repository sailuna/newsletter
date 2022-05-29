import { Button, Col, Row, Form, Container } from "react-bootstrap"
import React, { useState } from "react"
import axios from "axios"

const FormWithoutValidation = () => {
  const [validated] = useState(false)
  const [show, setShow] = useState(false)
  const [name, setName] = useState(null)
  const [fullname, setFullname] = useState(null)
  const [email, setEmail] = useState(null)
  const [response, setResponse] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()

    axios({
      method: "post",
      url: "http://localhost:3001",
      data: {
        name: name,
        fullname: fullname,
        email: email,
      },
    })
      .then(data => {
        setShow(true)
        setResponse(data.data)
      })
      .catch(err => {
        console.log(err)
        setShow(false)
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
    <>
      <Container>
        <Row className={show ? "my-5 d-none" : "my-5"}>
          <Col lg={10} className="mx-auto text-center my-5">
            <h1>Register to Newsletter (Without Validation)</h1>
          </Col>
          <Col lg={10} className="mx-auto text-center">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    placeholder="First name"
                    onChange={handleChange}
                    name="name"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    placeholder="Last name"
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
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-100"
              >
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={show ? "my-5" : "my-5 d-none"}>
          <Col>
            <h1>{response}</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export { FormWithoutValidation }

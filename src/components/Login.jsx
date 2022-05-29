import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import { Button, Col, Row, Form, Container } from "react-bootstrap"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/`)
    }

    return (
      <>
        <Container>
          <Row className="my-5">
            <Col lg={10} className="mx-auto text-center">
              <Row>
                <Col lg={12}>
                  <h1>Log in</h1>
                </Col>
                <Col>
                  <Form
                    method="post"
                    onSubmit={event => {
                      this.handleSubmit(event)
                      navigate(`/`)
                    }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        onChange={this.handleUpdate}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={this.handleUpdate}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" value="Log In">
                      Log In
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
       
      </>
    )
  }
}

export { Login }

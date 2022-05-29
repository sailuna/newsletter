import React from "react"
import { navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { Navbar, Nav, Container } from "react-bootstrap"

const NavBar = () => {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`
  } else {
    greetingMessage = "You are not logged in"
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">{greetingMessage}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/app/form-with-validation">
              Form With Validation
            </Nav.Link>
            <Nav.Link href="/app/form-without-validation">
              Form Without Validation
            </Nav.Link>
            {isLoggedIn() ? (
              <Nav.Link href="/" onClick={event => {
                event.preventDefault()
                logout(() => navigate(`/app/login`))
              }}>
               Logout
            </Nav.Link>
            ) : null}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export { NavBar }

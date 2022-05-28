import { Link } from "gatsby"
import React from "react"
import { Container, Col, Row } from "react-bootstrap"

export default function Home() {
  return (
    <Container>
      <Row className="my-5">
        <Col lg={10} className="text-center mx-auto">
          <h1>OWASP</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={10} className="text-center mx-auto">
          <Row>
            <Col>
              <Link to="form-validation"> Form with validation</Link>
            </Col>
            <Col>
              <Link to="form-without-validation"> Form without validation</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

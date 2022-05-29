import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"
import { Layout } from "../components/layout"
import { Row,Container,Col } from "react-bootstrap"

const Home = () => {
  return (
    <Layout>
      <Container>
        <Row className="my-5">
          <Col lg={10} className="mx-auto text-center">
            <h1>Hello {isLoggedIn() ? getUser().name : "stranger"}!</h1>
            <p>
              {isLoggedIn() ? (
                <>
                  You are logged in, so check your{" "}
                  <Link to="/app/form-with-validation" className="link-success me-3">
                    Form With Validation
                  </Link>
                  <Link to="/app/form-without-validation" className="link-danger">
                    Form Without Validation
                  </Link>
                </>
              ) : (
                <>
                  You should <Link to="/app/login">log in</Link> to see
                  restricted content
                </>
              )}
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home

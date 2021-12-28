import React, { Fragment } from "react";
import { Form, Col, Button, Card, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

import classes from "./SignIn.module.css";
function SignIn() {
  return (
    <Fragment>
      <section className={classes.signInSection}>
        <div className={classes.formContainer}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Form>
                <div className="d-flex justify-content-center align-items-center flex-column mb-3">
                  <i className="fas fa-book-open fa-2x mb-3" />
                  <h1 className="">Log in</h1>
                </div>
                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="mb-3"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="d-flex align-items-center mb-3"
                >
                  <span>No account?</span>
                  <LinkContainer to="/sign-up">
                    <Nav.Link>
                      <span>Creat one!</span>
                    </Nav.Link>
                  </LinkContainer>
                </Form.Group>
                <Form.Group as={Col} className="mb-3">
                  <LinkContainer to="/password">
                    <Navbar.Text className={classes.textForgetPassword}>
                      Forgot password
                    </Navbar.Text>
                  </LinkContainer>
                </Form.Group>
                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </section>
    </Fragment>
  );
}

export default SignIn;

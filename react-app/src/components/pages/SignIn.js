import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Col, Button, Card, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

import classes from "./SignIn.module.css";
const SignIn = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required("Email is required!"),
        password: yup.string().required("Password is required!"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        let modifiedValues = values;
        delete modifiedValues.passwordConfirmation;

        fetch("/api/v1/user/login", {
          method: "POST",
          body: JSON.stringify(modifiedValues),
        })
          .then((response) => response.json())
          .then((message) => console.log(message));

        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => {
      return(
      <section className={classes.signInSection}>
        <div className={classes.formContainer}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center align-items-center flex-column mb-3">
                  <i className="fas fa-book-open fa-2x mb-3" />
                  <h1 className="">Log in</h1>
                </div>
                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                  name="email"
                  type="text" 
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}/>
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="mb-3"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                  name="password"
                  type="text" 
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur} />
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
                <Button variant="dark" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </section>
      )}}
    </Formik>
  )
};


export default SignIn;

import React from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import classes from "./SignUp.module.css";

const SignUp = () => (
  <Formik
    initialValues={{ email: "", password: "" }}

    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}

    schema={yup.object().shape({
      firstName: yup.string()
        .required("Required"),
      email: yup.string()
        .email()
        .required("Required"),
      password: yup.string()
        .required("Required")
        .min(8, "Password is too short - should be 8 characters minimum")
        .matches(/(?=.*[0-9])/, "Password must contain a number"),
    })}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <section className={classes.signUpSection}>
        <div className={classes.formContainer}>
          <Card className="shadow p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center align-items-center flex-column mb-3">
                  <i className="fas fa-book-open fa-2x mb-3" />
                  <h1 className="">Join our Library</h1>
                </div>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="John"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      placeholder="Doe"
                      type="text"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                  />
                  {errors.email && touched.email && (
                    <div className={classes.inputFeedback}>{errors.email}</div>
                  )}
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridPassword"
                  className="mb-3"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />
                  {errors.password && touched.password && (
                    <div className={classes.inputFeedback}>
                      {errors.password}
                    </div>
                  )}
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridPasswordConfiramtion"
                  className="mb-3"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <Button variant="dark" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </section>
    )}
  </Formik>
);

export default SignUp;

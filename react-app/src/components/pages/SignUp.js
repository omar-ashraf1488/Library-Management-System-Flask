import React, {useState} from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const [formErrors, setErrors] = useState("");
  
  return (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    }}
    validationSchema={yup.object().shape({
      firstName: yup.string().required("Required"),
      lastName: yup.string().required("Required"),
      email: yup.string().email().required("Email is required!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(8, "Password is too short - should be 8 characters minimum!")
        .matches(/(?=.*[0-9])/, "Password must contain a number!"),
      passwordConfirmation: yup
        .string()
        .required("Confirm Password is required!")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    })}

    onSubmit={(values, { setSubmitting }) => {
      let modifiedValues = values;
      delete modifiedValues.passwordConfirmation;
      
      fetch('/api/v1/user/register', {
        method:'POST',
        body: JSON.stringify(modifiedValues)
      }).then(response => response.json())
      .then(message => console.log(message))

      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => {
      if (errors.password && touched.password) {
        setErrors(classes.error)
      }
      if (values.password !== "" && values.password === values.passwordConfirmation) {
        setErrors(classes.right)
      }
      return (
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
                      name="firstName"
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
                      name="lastName"
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
                    className={
                      errors.email && touched.email ? classes.error : null
                    }
                  />
                  {errors.email && touched.email && (
                    <span className={classes.inputFeedback}>
                      {errors.email}
                    </span>
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
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={formErrors}
                  />
                  {errors.password && touched.password && (
                    <span className={classes.inputFeedback}>
                      {errors.password}
                    </span>
                  )}
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="formGridPasswordConfiramtion"
                  className="mb-3"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Password"
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={formErrors}
                  />
                  {errors.passwordConfirmation &&
                    touched.passwordConfirmation && (
                      <span className={classes.inputFeedback}>
                        {errors.passwordConfirmation}
                      </span>
                    )}
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
  )};

export default SignUp;

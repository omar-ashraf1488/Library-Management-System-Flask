import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Glyphicon,
} from "react-bootstrap";

function MainNavbar() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container fluid className="d-flex">
          <div className="p-2">
            <Navbar.Brand className="d-flex align-items-center" href="/">
              <i className="fas fa-book-open fa-2x"></i>
              Library
            </Navbar.Brand>
          </div>
          <div className="p-2">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="d-flex align-items-center"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Books</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="sign-up">
                  <i class="m-1 fas fa-user"></i> 
                  Sign Up
                </Nav.Link>
                <Nav.Link href="log-in">
                  <i class="m-1 fas fa-sign-in-alt"></i>
                 Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default MainNavbar;

/*
<Form className="d-flex">
<FormControl
  type="search"
  placeholder="Search"
  className="me-2"
  aria-label="Search"
/>
<Button variant="outline-success">Search</Button>
</Form>
*/

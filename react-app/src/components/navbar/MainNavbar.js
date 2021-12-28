import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

function MainNavbar() {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="d-flex align-items-center">
              <i className="fas fa-book-open fa-2x me-2"></i>
              <span>Library</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/books">
                <Nav.Link>Books</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sign-up">
                <Nav.Link>
                  <i className="me-1 fas fa-user"></i>
                  <span>Sign Up</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sign-in">
                <Nav.Link>
                  <i className="me-1 fas fa-sign-in-alt"></i>
                  <span>Login</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
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

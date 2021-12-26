import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

function MainNavbar() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container fluid className="d-flex">
          <div className="p-2">
            <Navbar.Brand className="d-flex align-items-center" href="/">
              <i className="fas fa-book-open fa-2x me-2"></i>
              <span>Library</span>
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
                <LinkContainer to="/log-in">
                  <Nav.Link>
                    <i className="me-1 fas fa-sign-in-alt"></i>
                    <span>Login</span>
                  </Nav.Link>
                </LinkContainer>
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

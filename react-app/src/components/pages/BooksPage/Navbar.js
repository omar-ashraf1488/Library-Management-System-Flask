import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

function FirstNavbar() {
    return (
        <Fragment>
            <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand className="d-flex align-items-center ms-3">
                        <i className="fas fa-book-open fa-2x me-2"></i>
                        <span>Library</span>
                        </Navbar.Brand>
                    </LinkContainer>
                </Container>
          </Navbar>
    </Fragment>
  );
}


export default FirstNavbar;
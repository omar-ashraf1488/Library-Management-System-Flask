import React, { useState, Fragment } from "react";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {setClick(!click)};
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <Fragment>
      <nav className="navbar-custom">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo nav" onClick={closeMobileMenu}>
          <i className="fas fa-book-open"></i>
            Library
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/books"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Books
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up 
              </Link>
            </li>
          </ul>
          <Button className="lg" buttonStyle='btn--outline'>Sign Up</Button>
        </div>
      </nav>
      
    </Fragment>
  );
}

export default Navbar;

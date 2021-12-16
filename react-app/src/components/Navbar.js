import React, { useState, Fragment } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
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
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo nav">
          <i class="fas fa-book-open"></i>
            Library
          </Link>
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
                to="/option1"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Books
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/option2"
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
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

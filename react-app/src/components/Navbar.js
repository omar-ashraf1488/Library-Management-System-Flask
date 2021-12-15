import React, { useState, Fragment} from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo nav">
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
                Option 1
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/option2"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Option 2
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/option3"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Option 3
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;

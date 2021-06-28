import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
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

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Bakery{" "}
            <img src="/images/cake-1.png" alt="cake" height="30" width="30" />
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
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cakes" className="nav-links" onClick={closeMobileMenu}>
                Cakes
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Order Now
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Order Now</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

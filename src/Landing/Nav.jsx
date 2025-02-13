
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { HiMiniBarsArrowDown } from "react-icons/hi2";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState)
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  
  return (
    <>
      <div id="navbar">

        <div id="image">
          <img id="navimg" src="heart.png" alt="Logo" />
          <p>Apex Hospital</p>
        </div>




        <div id="menuitems" className={isMenuOpen ? "open-menu" : ""}>
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#find-us" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>



        <div id="options" className={isMenuOpen ? "open-menu" : ""}>
          <button to="/booktable" onClick={closeMenu}>Book Appointment</button>
        </div>





        <div className="rightmenu" onClick={toggleMenu} onDoubleClick={toggleMenu}  >
          <ul>
            <li>
              <a id="menu-item">
                <HiMiniBarsArrowDown  className="i1"/>
              </a>
              <ul className={`megamenu ${isMenuOpen ? "open-megamenu" : ""}`}>
                <li>
                  <a href="#home" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={closeMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={closeMenu}>
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#laurels" onClick={closeMenu}>
                    Awards
                  </a>
                </li>
                <li>
                  <a href="#find-us" onClick={closeMenu}>
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    Login / Register
                  </Link>
                </li>
                <li>
                  <Link to="/booktable" onClick={closeMenu}>
                    Book Table
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>



      </div>
    </>
  );
};

export default Nav;
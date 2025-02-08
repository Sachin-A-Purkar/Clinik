<div className='navbar'>
      <div className='logo'>
        <img src="/heart.png" className='logoimg' alt='Logo'/>
      </div>
      <div className='menuitems'>
        <ul>
          <li>
            <Link to="#home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="#services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="#aboutus" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="#contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div id='opt' className={isMenuOpen ? "open-menu" : ""}>
        <ul>
          <li>
            <Link to="/login" onClick={closeMenu}>
              Login/Register
            </Link>
          </li>
          <li>
            <Link to="/book-table" onClick={closeMenu}>
              Book a Table
            </Link>
          </li>
        </ul>
      </div>

      <div className='rightmenu' onClick={toggleMenu}>
        <ul>
          <li>
            <a id='menu-item'>
              <CgMenuRightAlt />
            </a>
            <ul className={`megamenu ${isMenuOpen ? "open-megamenu" : ""}`}>
              <li>
                <Link to="#home" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="#aboutus" onClick={closeMenu}>
                  About us
                </Link>
              </li>
              <li>
                <Link to="#menu" onClick={closeMenu}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="#find-us" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" onClick={closeMenu}>
                  Login/Register
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
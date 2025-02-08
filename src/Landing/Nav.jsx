// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CgMenuRightAlt } from "react-icons/cg";
// import "./Nav.css";

// function Nav() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false); // Hide the menu when a navigation item is clicked
//   };

//   return (
//     <>
//     <header>
//       <div id='navbar'>
//         <div id='navbar-left'>
//           <img src="/heart.png" className='logoimg' alt='Logo'/>
//           <p>Apex Hospital</p>
//         </div>
//         <div id='navbar-right' className={isMenuOpen ? "open-menu" : ""}>
//           <ul>
//             <li>
//               <a href='#home'>Home</a>
//             </li>
//             <li>
//               <a href='#services'>Services</a>
//             </li>
//             <li>
//               <a href='#about'>About Us</a>
//             </li>
//             <li>
//               <a href='#contact'>Contact</a>
//             </li>
//           </ul>
//           </div>
//           <div id="options" className={isMenuOpen ? "open-menu" : ""}>
//           <ul>
//             <li>
//               <Link to="/login" onClick={closeMenu}>
//                 Login / Register &nbsp;|
//               </Link>
//             </li>
//             <li>
//               <Link to="/booktable" onClick={closeMenu}>
//                 Book Table
//               </Link>
//             </li>
//           </ul>
//           <button >Book Appointment</button>
//         </div>
          
        
//       </div>
      

//       <div className="rightmenu" onClick={toggleMenu}>
//           <ul>
//             <li>
//               <a id="menu-item">
//                 <i className="fa-solid fa-bars"></i>
//               </a>
//               <ul className={`megamenu ${isMenuOpen ? "open-megamenu" : ""}`}>
//                 <li>
//                   <a href="#home" onClick={closeMenu}>
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#about" onClick={closeMenu}>
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#menu" onClick={closeMenu}>
//                     Menu
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#laurels" onClick={closeMenu}>
//                     Awards
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#find-us" onClick={closeMenu}>
//                     Contact
//                   </a>
//                 </li>
//                 <li>
//                   <Link to="/login" onClick={closeMenu}>
//                     Login / Register
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/booktable" onClick={closeMenu}>
//                     Book Table
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//     </header>
//     </>
//   );
// }

// export default Nav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Hide the menu when a navigation item is clicked
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
              <a href="#login" onClick={closeMenu}>
              Login / Register 
              </a>
            </li>
          </ul>
        </div>



        <div id="options" className={isMenuOpen ? "open-menu" : ""}>
          <button to="/booktable" onClick={closeMenu}>Book Appointment</button>
        </div>





        <div className="rightmenu" onClick={toggleMenu}>
          <ul>
            <li>
              <a id="menu-item">
                <i className="fa-solid fa-bars"></i>
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
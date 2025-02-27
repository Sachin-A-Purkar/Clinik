import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container1">
        <div >
          <img src="/heart.png" alt="" className="logo"/><br />
          <h2 className="logohead">Appex Hospital</h2>
        </div>
        
        <button 
          className="menu-button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Skill">Skills</a></li>
          <li><a href="#Project">Projects</a></li>
          <li><a href="#Academics">Academics</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li><button className="btn  book">Book an Appointment</button></li>
        </ul>
      </div>
    </nav>
  );
};

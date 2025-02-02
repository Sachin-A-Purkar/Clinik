import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import "./Nav.css"

function Nav() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval); // Cleanup on unmount
        }, []);
  return (
    <div className='navbar'>
      <div className='clock'>
      <p>Current Time: {time}</p>
      </div>
      <div className='headbar'>
            <div className='part1'>
                <img src={H1} alt='logo' className='himg1'/>
                <h2 className='text1'>Apex Hospital</h2>
            </div>
            <div className='part2'>
                <a href="#home"> HOME </a>
                <a href="#home"> ABOUT </a>
                <a href="#home"> SERVICES </a>
                <a href="#home"> PAGES </a>
                <a href="#home"> CONTACT </a>
            </div>

            <div className="part3">
              <button>Appointment <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            
            
      </div>
    </div>
  )
}

export default Nav

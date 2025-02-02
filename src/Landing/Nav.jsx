import React from 'react'
import "./Nav.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Nav() {
  const[time,setTime]=useState(new Date().toLocaleTimeString())

  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    }, 1000)
  })
  return (
    <div className='navbar'>
      <div className='clock'>
        <p>
          Current Time : {time}
        </p>
      </div>
      <div className='headbar'>
            <div className='part1'>
                <img src="/heart.png" className='himg1'/>
                <h2 className='text1'>Apex Hospital</h2>
            </div>
            <div className='part2'>
                <a href="#home" className='an1'> HOME </a>
                <a href="#home" className='an1'> ABOUT </a>
                <a href="#home" className='an1'> SERVICES </a>
                <a href="#home" className='an1'> PAGES </a>
                <a href="#home" className='an1'> CONTACT </a>
            </div>
            <div className='part3'>
              <button>Appointment<FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
      </div>
      
    </div>
  )
}

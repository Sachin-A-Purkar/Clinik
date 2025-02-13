import React from 'react'
import "./About.css"
import { CiCircleCheck } from "react-icons/ci";

const About = () => {
  return (
    <>
    <div id='acontainer'>
            <div id='acol1'>
              <img src="/doct1.jpg" className='aimg1'></img>
            </div>
            <div id='acol2'>
              <button className='but2'>About Us</button>
              <h1 id='ahead'>Providing Compassionate Care, Advanced Healing, <br></br>and a Commitment to Your Well-Being</h1>
              <p id='para'>At Apex Hopsital, we are dedicated to providing world-class healthcare with a personal touch. Our team of experienced professionals works tirelessly to ensure the well-being of every patient, combining cutting-edge medical technology with compassionate care.<br/><br/> Your health is our priority, and we strive to create a healing environment where you feel safe, valued, and supported.</p>
              <p><CiCircleCheck id='check'/>&nbsp;&nbsp;&nbsp;&nbsp;Quality Health Care<br/>
              <CiCircleCheck id='check'/>&nbsp;&nbsp;&nbsp;&nbsp;Only Qualified Doctors<br/>
              <CiCircleCheck id='check'/>&nbsp;&nbsp;&nbsp;&nbsp;Medical Research Profesionals
              </p>
              <button className='but3'>Know more</button>
            
      </div>
    </div>
    </>
  )
}

export default About

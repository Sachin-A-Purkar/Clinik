import React from 'react'
import "./Carousle.css"
import CountUp from 'react-countup';
import { useState } from 'react';
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";

const images = [
  "/Cardiology.png",
  "/Neruology.png",
  "/Physiology.png",
];

export default function Carousle() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="container">
      
        <div className="div60">
            <div className='totalt'><h1 className='chead1'>" Good Health is the Foundation of<br/> a Happy Life"</h1></div>
            <div className='total'>
                <div className='total1'>
                    <h1><CountUp start={100} end={12678} duration={4} /></h1>
                    <h2 >Total Patients</h2>
                </div>
                <div className='total2'>
                    <h1><CountUp start={0} end={124} duration={4} /></h1>
                    <h2>Total Doctors</h2>
                </div>
                <div className='total3'>
                    <h1><CountUp start={0} end={678} duration={4} /></h1>
                    <h2>Total Staff</h2>
                </div>
            </div>
      </div>
      <div className="div40">
      <div className="carousel">
      <FaArrowLeft onClick={prevSlide} className="carousel-btn"/>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
          <FaArrowRight onClick={nextSlide} className="carousel-btn"/>
        </div>
      </div>
    </div>
  )
}

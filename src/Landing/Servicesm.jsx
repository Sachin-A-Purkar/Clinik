import React from 'react'
import "./Servicesm.css"
import { FaHeartbeat , FaBrain ,FaWheelchair ,FaTooth ,FaVials} from "react-icons/fa";
import { FaXRay } from "react-icons/fa";

function Servicesm() {
  return (
    <div className='container-fluid mt-3 serc'>
      <div className='row'>
        <div className='col shead'>
        <button className='but4'>About Us</button><br/>
        <h2 className='heati'>Health Care Solutions</h2>
        </div>
      </div>
      <div className='row serv'>
        <div className='col-sm-12 col-md p-3'>
        <div className='box1'>
              <div className="card">
              <FaHeartbeat id='ico'/>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p className="card-text">This is a simple card component with some text inside it.</p>
                  <button className="card-btn">Read More</button>
                </div>
              </div>
            </div>
            <div className='box2'>
            <div className="card">
            <FaXRay id='ico'/>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p className="card-text">This is a simple card component with some text inside it.</p>
                  <button className="card-btn">Read More</button>
                </div>
              </div>
            </div>
        </div>
        <div className='col-sm-12 col-md p-3'>
        <div className='box1'>
            <div className="card">
            <FaBrain id='ico'/>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p className="card-text">This is a simple card component with some text inside it.</p>
                  <button className="card-btn">Read More</button>
                </div>
              </div>
            </div>
            <div className='box2'>
            <div className="card">
              <FaWheelchair id='ico'/>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p className="card-text">This is a simple card component with some text inside it.</p>
                  <button className="card-btn">Read More</button>
                </div>
              </div>
            </div>
        </div>
        <div className='col-sm-12 col-md p-3'>
        <div className='box1'>
            <div className="card">
                <FaTooth id='ico'/>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p className="card-text">This is a simple card component with some text inside it.</p>
                  <button className="card-btn">Read More</button>
                </div>
              </div>
            </div>
            <div className='box2'>
            <div className="card">
            <FaVials id='ico'/>
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p className="card-text">This is a simple card component with some text inside it.</p>
                  <button className="card-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
      
  )
}

export default Servicesm

{/* <button className='but2'>About Us</button><br/> */}
import React from 'react'
import "./Features.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor,faHeadphonesSimple,faCommentMedical,faCheck} from "@fortawesome/free-solid-svg-icons";


const Features = () => {
  return (
    <div className="container-fluid mt-3 feat">
      <div className="row featr">
        <div className="col-sm-12 col-md p-3' coluu1"> 
          <button className='featbut'> Features</button>
          <h1 className='feath1'>Why Choose Us</h1>
          <p className='featp'>At the heart of our hospital is a team of highly skilled and experienced medical professionals dedicated to delivering the highest standard of care. Our doctors, nurses, and healthcare staff are not only leaders in their respective fields but also deeply committed to providing personalized and compassionate care to every patient.</p>
          <div className='row featr1'>
            <div className='col featc1'>
            <p className='cona'><FontAwesomeIcon icon={faUserDoctor} border  id='fico'/> <h2 id='fih2'>Expirenced <br/> Doctor</h2></p>
              <br/>
            <p className='cona'><FontAwesomeIcon icon={faCommentMedical} border id='fico'/><h2 id='fih2'>Positive <br/>Consultation</h2></p>
              </div>
            <div className='col featc2'>
            <p className='cona'><FontAwesomeIcon icon={faCheck} border id='fico'/><h2 id='fih2'>Quality <br/>Services</h2></p>
              <br/>
            <p className='cona'><FontAwesomeIcon icon={faHeadphonesSimple} border id='fico'/><h2 id='fih2'>24Hours <br/>Support</h2></p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md p-3' coluu2">
          <img src='/feat.jpg' alt='feat' className='featimg'/>
        </div>
        
      </div>
    </div>


  )
}

export default Features

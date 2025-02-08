import React from 'react'
import "./Carousle.css"
import CountUp from 'react-countup';

export default function Carousle() {
  return (
    <div className="container">
        <div className="div60">
            <div className='totalt'><h1 className='chead1'>" Good Health is the Foundation of<br/> a Happy Life"</h1></div>
            <div className='total'>
                {/* <div className='total1'>
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
                </div> */}
            </div>
      </div>
      <div className="div40">40% Width Div</div>
    </div>
  )
}

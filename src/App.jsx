import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from "react-router-dom";
import './App.css'

import Nav from './Landing/Nav'
import Carousle from './Landing/Carousle'
import About from './Landing/About';
import Servicesm from './Landing/Servicesm';
import Features from './Landing/Features';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
    <BrowserRouter>
    <Nav/>
    <Carousle/>
    <About/>
    <Servicesm/>
    <Features/>
    </BrowserRouter>
      
      {/* <Carousle/> */}
    </div>
  )
}

export default App

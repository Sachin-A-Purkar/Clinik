import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from "react-router-dom";
import './App.css'

import Nav from './Landing/Nav'
import Carousle from './Landing/Carousle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Carousle/>
    </BrowserRouter>
      
      {/* <Carousle/> */}
    </>
  )
}

export default App

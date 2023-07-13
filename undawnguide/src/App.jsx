import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Landingpage/Navbar'
import Hero from './assets/components/Landingpage/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='backgroundcolor'>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App

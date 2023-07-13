import React from 'react'
import herovideo from '/img/herovideo.mp4'
import undawnweblogo from '/img/undawnweblogo.png';
import "./index.css"

function Hero() {
  return (
    <div className='hero'>
      <video className='herovideoback' src={ herovideo } autoPlay loop muted />
      <img className='herologo' src={ undawnweblogo } />
      <div>
        <ul className='buttons'>
            <button className='button-73'>GUIDES</button>
        </ul>
      </div>
    </div>
  )
}

export default Hero

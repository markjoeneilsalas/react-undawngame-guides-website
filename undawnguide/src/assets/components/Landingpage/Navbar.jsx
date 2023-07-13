import React from 'react';
import "./index.css"
import undawnweblogo from '/img/undawnweblogo.png';

function Navbar() {
  return (
      <nav className='navbarcolor'>
        <div>
            <img className='logo' src={ undawnweblogo } />
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Guides</li>
            </ul>
        </div>
        <div>
            <button className='button-73'>Download</button>
        </div>
      </nav>
  )
}

export default Navbar

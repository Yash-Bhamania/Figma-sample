import React from 'react'

function Navigation() {
  return (
    <nav className='container'>
        <div>
          <img src="img/brand_logo.png" alt="" />
        </div>

        <ul>
          <li href="">Home</li>
          <li href="">Location</li>
          <li href="">About</li>
          <li href="">Contact</li>
        </ul>
        <button>LogIn</button>
      </nav>
  )
}

export default Navigation
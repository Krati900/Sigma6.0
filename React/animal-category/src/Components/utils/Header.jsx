import React from 'react'
import { HeaderData } from './HeaderData'

function Header() {
  return (
    <div className="weather-app">
      <div className='header'>
        <div className="logo">
            <div className="logo-icon"><i class="fa-solid fa-shield-cat"></i></div>
            <div className="logo-text">Zooskool</div>
        </div>
        <nav className="menu">
            <ul>
                <li><a href=""></a>Pet Animal</li>
                <li><a href=""></a>Wild Animal</li>
            </ul>
        </nav>
      </div>
    </div> 
  )
}

export default Header

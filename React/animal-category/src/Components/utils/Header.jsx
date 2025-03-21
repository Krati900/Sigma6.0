import React from 'react'
import { HeaderData } from './HeaderData'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="animal-app">
      <div className='header'>
        <div className="logo">
            <div className="logo-icon"><i class="fa-solid fa-shield-cat"></i></div>
            <div className="logo-text">Zooskool</div>
        </div>
        <nav className="menu">
            <ul>
              <li><Link to="/">Pet Animal</Link></li>
              <li><Link to="/wild-animal">Wild Animal</Link></li>
            </ul>
        </nav>
      </div>
    </div> 
  )
}

export default Header

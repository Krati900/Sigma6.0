import React from 'react'

function Header() {
  return (
    <div className="weather-app">
      <div className='header'>
        <div className="logo">
            <div className="logo-icon"><i class="fa-solid fa-cloud"></i></div>
            <div className="logo-text">SkyCast</div>
        </div>
        <nav className="menu">
            <ul>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Weather</li>
            </ul>
        </nav>
      </div>
    </div> 
  )
}

export default Header

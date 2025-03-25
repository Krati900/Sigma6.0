import React from 'react'
import NavItems from './NavItems'
function NavList({navData}) {
  return (
    <div className='nav-ul'>
      {navData.map((item, index) => (
        <NavItems  className='nav-ul' key={index}
            label={item.label} 
            subItems={item.subItems}
            path={item.path}
        >
        </NavItems>
    ))}
    </div>
  )
}
export default NavList

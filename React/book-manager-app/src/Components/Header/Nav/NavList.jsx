import React from 'react'
import NavItems from './NavItems'
function NavList({navData}) {
  return (
    <div>
      {navData.map((item, index) => (
        <NavItems key={index}
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

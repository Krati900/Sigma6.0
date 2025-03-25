import React from 'react'

function TabButton({children, handleTab, className}) {
  return (
    <div className={`${className}`}>
      <li onClick={handleTab}>{children}</li>
    </div>
  )
}

export default TabButton;

import React from 'react'

function TabButton({children, handleTab}) {
  return (
    <div className='tab-button'>
      <li className='tabs' onClick={handleTab}>{children}</li>
    </div>
  )
}

export default TabButton;

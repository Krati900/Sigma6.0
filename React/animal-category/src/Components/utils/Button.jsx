import React from 'react';
import '../CSS/button.css';

function Button({ children, handleButtonClick, diffBackground }) {
  return (
    <div>
      <button 
      onClick={ handleButtonClick }
      className={ `btn ${diffBackground}` }>{ children }</button>
    </div>
  )
}

export default Button

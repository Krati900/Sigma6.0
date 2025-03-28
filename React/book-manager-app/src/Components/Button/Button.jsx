import React from 'react';

function Button({ children, className }) {
  return (
    <div>
      <button className={`btn ${className}`}>{children}</button>
    </div>
  );
}

export default Button;




import React from 'react'

function Card({ children }) {
  return (
    <div>
      <div className="cards">
        { children } 
      </div> 
    </div>
  )
}

export default Card

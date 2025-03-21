import React from 'react'

function Card(data) {
  return (
    <div className='cards'>
      { data.map((pet, index)=> (
        <div key={index} className="card">
            <img src={ pet.image } />
            <h1 className="animal-name">{ pet.title }</h1>
            <p className="animal-desc">{ pet.description }</p>
        </div>
      ))}   
    </div>
  )
}

export default Card;

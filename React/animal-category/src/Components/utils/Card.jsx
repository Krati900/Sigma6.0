import React from 'react';
import Button from './Button';

function Card({ data }) {
  const handleClick = (animalName) => {
    alert(`Hii Krati, I am ${animalName}`);
  };

  return (
    <div className='cards'>
      {data.map((animalData, index) => (
        <div key={index} className="card">
          <img src={animalData.image} alt={animalData.title} />
          <h2 className="animal-name">{animalData.title}</h2>
          <p className="animal-desc">{animalData.description}</p>
          <Button
            handleButtonClick={() => handleClick(animalData.title)} 
            diffBackground="green"
          >
            {animalData.uniqueButton}
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Card;

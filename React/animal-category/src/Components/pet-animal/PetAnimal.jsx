import React from 'react'
import { PetData } from './PetData'
import Card from '../utils/Card';
function PetAnimal() {
  return (
    <div>
      <h1>Pet Animals</h1>
      <div className='animal-cards'><Card data={ PetData }/></div>
    </div>
  )
}

export default PetAnimal

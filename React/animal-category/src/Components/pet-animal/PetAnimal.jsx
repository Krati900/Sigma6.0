import React from 'react'
import { PetData } from './PetData'
import Button from '../utils/Button';
import Card from '../utils/Card';
function PetAnimal() {
  return (
    <div>
       <Card data={ PetData }/>
       <Button />
    </div>
  )
}

export default PetAnimal

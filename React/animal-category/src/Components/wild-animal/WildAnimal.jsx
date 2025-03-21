import React from 'react'
import { WildData } from './WildData';
import Button from '../utils/Button';
import Card from '../utils/Card';
function WildAnimal() {
  return (
    <div>
      <Card data={ WildData }/>
      <Button />
    </div>
  )
}

export default WildAnimal

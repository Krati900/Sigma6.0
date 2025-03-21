import React from 'react'
import { WildData } from './WildData';
import Card from '../utils/Card';
function WildAnimal() {
  return (
    <div>
      <h1>Wild Animals</h1>
      <div className='animal-cards'><Card data={ WildData }/></div>
    </div>
  )
}
export default WildAnimal

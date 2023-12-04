import React from 'react'
import { gearRatios, partSum } from './GearRatios.logic'
import { input, testInput } from './GearRatios.input'

export function GearRatios() {
  return (
    <div>
      <p>GearRatios step one: {partSum(input)}</p>
      <p>GearRatios step two: {gearRatios(input)}</p>
    </div>
  )
}

import React from 'react'
import { input } from './Trebuchet.input'
import { calibrationSum, stepTwoDigitsToLookFor } from './Trebuchet.logic'

export function Trebuchet() {
  return (
    <div>
      <p>Trebuchet step one: {calibrationSum(input)}</p>
      <p>Trebuchet step two: {calibrationSum(input, stepTwoDigitsToLookFor)}</p>
    </div>
  )
}

import React from 'react'
import { scratchCardNumberOfCardsWithCopies, scratchCardValueSum } from './Scratchcards.logic'
import { realInput, testInput } from './Scratchcards.input'

export function Scratchcards() {
  return (
    <div>
      <p>Scratchcards step one: {scratchCardValueSum(realInput)}</p>
      <p>Scratchcards step two: {scratchCardNumberOfCardsWithCopies(realInput)}</p>
    </div>
  )
}

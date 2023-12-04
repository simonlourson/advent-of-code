import React from 'react'
import { gameIdIfGameIsPossible, gameIdIfGameIsPossibleSum, powerOfGameSum } from './CubeConundrum.logic'
import { input } from './CubeConundrum.input'

export function CubeConundrum() {
  return (
    <div>
      <p>CubeConundrum step one: {gameIdIfGameIsPossibleSum(input)}</p>
      <p>CubeConundrum step two: {powerOfGameSum(input)}</p>
      {/*input.split('\n').map(function(value, index) {
        return <div key={index}>
          <div>{gameIdIfGameIsPossible(value, 12, 13, 14)}</div>
          <div>{value}</div>
        </div>
      })*/}
    </div>
  )
}

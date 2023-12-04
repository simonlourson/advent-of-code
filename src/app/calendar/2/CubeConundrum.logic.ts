export function gameIdIfGameIsPossible(game: string, maxRed: number, maxGreen: number, maxBlue: number): number {
  let firstSplit = game.split(': ')
  const gameId = Number.parseInt(firstSplit[0].replace('Game ', ''))

  for (let numberAndColor of firstSplit[1].replaceAll(',', ';').split('; ')) {
    let numberAndColorSplit = numberAndColor.split(' ')
    let numberOfBalls = Number.parseInt(numberAndColorSplit[0])
    let color = numberAndColorSplit[1]
    if ((numberOfBalls > maxRed && color === 'red') ||
        (numberOfBalls > maxGreen && color === 'green') ||
        (numberOfBalls > maxBlue && color === 'blue'))
      return 0
  }

  return gameId
}

export function powerOfGame(game: string): number {
  let minRed = 0
  let minGreen = 0
  let minBlue = 0
  for (let numberAndColor of game.split(': ')[1].replaceAll(',', ';').split('; ')) {
    let numberAndColorSplit = numberAndColor.split(' ')
    let numberOfBalls = Number.parseInt(numberAndColorSplit[0])
    let color = numberAndColorSplit[1]

    if (numberOfBalls > minRed && color === 'red') minRed = numberOfBalls
    else if (numberOfBalls > minGreen && color === 'green') minGreen = numberOfBalls
    else if (numberOfBalls > minBlue && color === 'blue') minBlue = numberOfBalls
  }

  return minRed * minGreen * minBlue
}

export function gameIdIfGameIsPossibleSum(lines: string): number {
  let sum: number = 0
  for (let line of lines.split('\n')) {
    if (line.trim().length > 0) sum += gameIdIfGameIsPossible(line, 12, 13, 14)
  }
  return sum
}

export function powerOfGameSum(lines: string): number {
  let sum: number = 0
  for (let line of lines.split('\n')) {
    sum += powerOfGame(line)
  }
  return sum
}
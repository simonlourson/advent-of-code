export function scratchCardValue(card: string): number {
  let currentValue = 0;

  for (let i = 0; i < scratchCardNumberOfWinningNumbers(card); i++)
    currentValue = currentValue == 0 ? 1 : currentValue * 2

  return currentValue
}

export function scratchCardValueSum(lines: string): number {
  let sum: number = 0
  for (let line of lines.split('\n')) {
    sum += scratchCardValue(line)
  }
  return sum
}

export function scratchCardNumberOfCardsWithCopies(lines: string): number {
  const cards = lines.split('\n')
  const copies = cards.map(function() { return 1 })

  for (let cardIndex = 0; cardIndex < cards.length; cardIndex++) {
    let nbOfWinningNumbers = scratchCardNumberOfWinningNumbers(cards[cardIndex])

    for (let i = 1; i <= nbOfWinningNumbers; i++)
      copies[cardIndex + i] = copies[cardIndex + i] + copies[cardIndex]
  }
  
  return copies.reduce(function(previousValue, currentValue) { return previousValue + currentValue})
}

function scratchCardNumberOfWinningNumbers(card: string): number {
  const winningNumbers = card.split(': ')[1].split(' | ')[0].split(' ').map(function(value) { return Number.parseInt(value) })
  const myNumbers = card.split(': ')[1].split(' | ')[1].split(' ').map(function(value) { return Number.parseInt(value) })

  let currentValue = 0;

  for (let myNumber of myNumbers)
    if (winningNumbers.indexOf(myNumber) > -1)
      currentValue += 1

  return currentValue
}
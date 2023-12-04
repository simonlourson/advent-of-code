export const digitsToLookFor: StringToLookFor[] = [0,1,2,3,4,5,6,7,8,9].map(function(value): StringToLookFor {
  return {
    stringToLookFor: value.toString(),
    numberToReturn: value
  }})

export const stepTwoDigitsToLookFor: StringToLookFor[] = [
  {stringToLookFor: '0', numberToReturn: 0},
  {stringToLookFor: '1', numberToReturn: 1},
  {stringToLookFor: '2', numberToReturn: 2},
  {stringToLookFor: '3', numberToReturn: 3},
  {stringToLookFor: '4', numberToReturn: 4},
  {stringToLookFor: '5', numberToReturn: 5},
  {stringToLookFor: '6', numberToReturn: 6},
  {stringToLookFor: '7', numberToReturn: 7},
  {stringToLookFor: '8', numberToReturn: 8},
  {stringToLookFor: '9', numberToReturn: 9},
  {stringToLookFor: 'zero', numberToReturn:   0},
  {stringToLookFor: 'one', numberToReturn:    1},
  {stringToLookFor: 'two', numberToReturn:    2},
  {stringToLookFor: 'three', numberToReturn:  3},
  {stringToLookFor: 'four', numberToReturn:   4},
  {stringToLookFor: 'five', numberToReturn:   5},
  {stringToLookFor: 'six', numberToReturn:    6},
  {stringToLookFor: 'seven', numberToReturn:  7},
  {stringToLookFor: 'eight', numberToReturn:  8},
  {stringToLookFor: 'nine', numberToReturn:   9},
]

export function calibrationValue(line: string, reference: StringToLookFor[] = digitsToLookFor): number {
  let firstDigit = findFirstOrLastOccurenceOfStringToLookFor(line, reference)
  let lastDigit = findFirstOrLastOccurenceOfStringToLookFor(line, reference, -1)

  return +(''+firstDigit+lastDigit);
}

export function calibrationSum(lines: string, reference: StringToLookFor[] = digitsToLookFor): number {
  let sum: number = 0
  for (let line of lines.split('\n')) {
    if (line.trim().length > 0) sum += calibrationValue(line, reference)
  }
  return sum
}

interface StringToLookFor {
  stringToLookFor: string
  numberToReturn: number
}

function findFirstOrLastOccurenceOfStringToLookFor(line: string, stringsToLookFor: StringToLookFor[], first: number = 1): number {
  let returnValue = 0
  let currentIndex = Number.POSITIVE_INFINITY
  for (let stringToLookFor of stringsToLookFor) {
    let index = first > 0 ? line.indexOf(stringToLookFor.stringToLookFor) : line.lastIndexOf(stringToLookFor.stringToLookFor)
    if (index == -1) continue
    index *= first

    if (index < currentIndex) {
      currentIndex = index
      returnValue = stringToLookFor.numberToReturn
    }
  }

  return returnValue
}
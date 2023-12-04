function isCharacterDigit(c: string) {
  return c >= '0' && c <= '9'
}

function containsSymbol(line: string): boolean {
  return line.replaceAll(/[0-9]/g, '').replaceAll('.', '').length > 0
}

export function partSum(input: string): number {
  const lines = input.split('\n')

  let sumPartNumber = 0

  for (let y = 0; y < lines.length; y++) {
    const line = lines[y]
    let currentPartNumberStart = 0
    let currentPartNumberStop = 0
    let currentPartNumber = ''
    for (let x = 0; x < line.length; x++) {
      const currentCharacter = line.substring(x, x+1)
      if (isCharacterDigit(currentCharacter)) {
        if (currentPartNumber.length == 0) currentPartNumberStart = x
        currentPartNumber = '' + currentPartNumber + currentCharacter
      }
      
      if (currentPartNumber.length > 0 && (!isCharacterDigit(currentCharacter) || x == line.length-1)) {
        currentPartNumberStop = x
          
        let isPartNumber = false

        for (let diffY = -1; diffY <= 1; diffY++) {
          let currentLine = y + diffY
          if (currentLine >= 0 && currentLine < lines.length) {
            let aboveLine = lines[currentLine].substring(Math.max(0, currentPartNumberStart - 1), Math.min(line.length, currentPartNumberStop + 1))
            if (containsSymbol(aboveLine)) {
              isPartNumber = true
              break
            }
          }
        }

        if (isPartNumber) sumPartNumber += Number.parseInt(currentPartNumber)
        
        //console.log(`part number: ${currentPartNumber}, isPartNumber: ${isPartNumber}, currentPartNumberStart: ${currentPartNumberStart}, currentPartNumberStop: ${currentPartNumberStop}`)

        currentPartNumberStart = 0
        currentPartNumberStop = 0
        currentPartNumber = ''
      }
    }
  }

  return sumPartNumber
}

function isPartNearGear(part: Part, x: number, y: number) {
  return part.line >= y - 1 &&
    part.line <= y + 1 &&
    part.columnStop >= x &&
    part.columnStart <= x + 1
}

export function gearRatios(input: string): number {
  const lines = input.split('\n')

  const parts: Part[] = []

  for (let y = 0; y < lines.length; y++) {
    const line = lines[y]
    let currentPartNumberStart = 0
    let currentPartNumberStop = 0
    let currentPartNumber = ''
    for (let x = 0; x < line.length; x++) {
      const currentCharacter = line.substring(x, x+1)
      if (isCharacterDigit(currentCharacter)) {
        if (currentPartNumber.length == 0) currentPartNumberStart = x
        currentPartNumber = '' + currentPartNumber + currentCharacter
      }
      
      if (currentPartNumber.length > 0 && (!isCharacterDigit(currentCharacter) || x == line.length-1)) {
        currentPartNumberStop = x
          
        let isPartNumber = false

        for (let diffY = -1; diffY <= 1; diffY++) {
          let currentLine = y + diffY
          if (currentLine >= 0 && currentLine < lines.length) {
            let aboveLine = lines[currentLine].substring(Math.max(0, currentPartNumberStart - 1), Math.min(line.length, currentPartNumberStop + 1))
            if (containsSymbol(aboveLine)) {
              isPartNumber = true
              break
            }
          }
        }

        if (isPartNumber) parts.push({
          partNumber: Number.parseInt(currentPartNumber),
          line: y,
          columnStart: currentPartNumberStart,
          columnStop: currentPartNumberStop
        })

        currentPartNumberStart = 0
        currentPartNumberStop = 0
        currentPartNumber = ''
      }
    }
  }

  //console.log(parts)
  let sumGearRatio = 0

  for (let y = 0; y < lines.length; y++) {
    const line = lines[y]
    for (let x = 0; x < line.length; x++) {
      if (line.substring(x, x+1) === '*') {
        //console.log(`gear at x: ${x}, y: ${y}`)

        const partsConnectedToGear: Part[] = []

        for (let part of parts)
          if (isPartNearGear(part, x, y))
            partsConnectedToGear.push(part)

        if (partsConnectedToGear.length == 2) sumGearRatio += partsConnectedToGear[0].partNumber * partsConnectedToGear[1].partNumber

      }
    }
  }

  return sumGearRatio
}

interface Part {
  partNumber: number
  line: number
  columnStart: number
  columnStop: number
}
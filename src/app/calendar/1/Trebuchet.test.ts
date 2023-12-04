import { calibrationSum, calibrationValue, stepTwoDigitsToLookFor } from "./Trebuchet.logic";


describe('testing calibration function', () => {
  test.each([
    ['', 0],
    ['1abc2', 12],
    ['pqr3stu8vwx', 38],
    ['a1b2c3d4e5f', 15],
    ['treb7uchet', 77],
    ['tgfcgdm1qsx3four2eightcctqd1', 11],
  ])('expect(calibrationValue(%s)).toBe(%i)', (line, expected) => {
    expect(calibrationValue(line)).toBe(expected);
  });
});

describe('testing sum function', () => {
  test('given example', () => {
    expect(calibrationSum(`1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`)).toBe(142);
  });
});

describe('testing complicated calibration function', () => {
  test.each([
    ['two1nine', 29],
    ['eightwothree', 83],
    ['abcone2threexyz', 13],
    ['xtwone3four', 24],
    ['4nineeightseven2', 42],
    ['zoneight234', 14],
    ['7pqrstsixteen', 76],
  ])('expect(calibrationValue(%s, )).toBe(%i)', (line, expected) => {
    expect(calibrationValue(line, stepTwoDigitsToLookFor)).toBe(expected);
  });
});
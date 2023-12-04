import { gameIdIfGameIsPossible, gameIdIfGameIsPossibleSum, powerOfGame, powerOfGameSum } from "./CubeConundrum.logic";

describe('testing calibration function', () => {
  test.each([
    ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', 1],
    ['Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', 2],
    ['Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', 0],
    ['Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', 0],
    ['Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', 5],
    ['Game 50: 18 red, 3 green; 8 red, 10 blue, 3 green; 11 red, 1 green; 8 red, 9 blue, 1 green; 7 blue, 3 red, 3 green', 0],
  ])('expect(gameIdIfGameIsPossible(%s)).toBe(%i)', (line, expected) => {
    expect(gameIdIfGameIsPossible(line, 12, 13, 14)).toBe(expected);
  });
});

const testInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

describe('testing sum function', () => {
  test('given example', () => {
    expect(gameIdIfGameIsPossibleSum(testInput)).toBe(8);
  });
});

describe('testing power of game', () => {
  test.each([
    ['Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', 48],
    ['Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', 12],
    ['Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', 1560],
    ['Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', 630],
    ['Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green', 36],
  ])('expect(calibrationValue(%s, )).toBe(%i)', (line, expected) => {
    expect(powerOfGame(line)).toBe(expected);
  });
});

describe('testing sum function', () => {
  test('given example', () => {
    expect(powerOfGameSum(testInput)).toBe(2286);
  });
});
import { testInput } from "./GearRatios.input";
import { gearRatios, partSum } from "./GearRatios.logic";

describe('testing sum function', () => {
  test('given example', () => {
    expect(partSum(testInput)).toBe(4361);
  });
});

describe('testing sum function', () => {
  test('given example', () => {
    expect(gearRatios(testInput)).toBe(467835);
  });
});
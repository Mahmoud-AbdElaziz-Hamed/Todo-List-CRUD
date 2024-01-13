import { getRandomNumber } from "./index";

describe("getRandomNumber function", () => {
  test("generates a number with non-zero on first digit", () => {
    const digit = 6;
    const randomNumber = getRandomNumber(digit);
    const firstDigit = parseInt(randomNumber.toString()[0]);
    expect(firstDigit).not.toBe(0);
  });
});

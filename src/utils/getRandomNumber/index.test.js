import { getRandomNumber } from "./index";

describe("getRandomNumber function", () => {
  test("generates a 6-digit number", () => {
    const digit = 6;
    const randomNumber = getRandomNumber(digit);
    expect(randomNumber.toString().length).toBe(6);
  });
});

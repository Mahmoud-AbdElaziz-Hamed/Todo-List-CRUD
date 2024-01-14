export const getRandomNumber = (digit) => {
  let id;
  do {
    const randomNumber = Math.floor(Math.random() * Math.pow(10, digit));
    id = randomNumber.toString();
  } while (id.length !== digit);
  return parseInt(id);
};
// const generateRandomNumbersArray = (digit, count) => {
//   const randomNumbersArray = [];

//   for (let i = 0; i < count; i++) {
//     const randomNumber = getRandomNumber(digit);
//     randomNumbersArray.push(randomNumber);
//   }

//   return randomNumbersArray;
// };

// // Example usage
// const digit = 6; // Set the desired number of digits
// const count = 1000; // Set the desired count of random numbers

// const arrayOfRandomNumbers = generateRandomNumbersArray(digit, count);
// console.log(arrayOfRandomNumbers);

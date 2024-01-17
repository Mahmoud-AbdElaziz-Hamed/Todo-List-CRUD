export const getRandomNumber = (digit) => {
  let id;
  do {
    const randomNumber = Math.floor(Math.random() * Math.pow(10, digit));
    id = randomNumber.toString();
  } while (id.length !== digit);
  return parseInt(id);
};

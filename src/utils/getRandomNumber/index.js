const GetRandomNumber = (digit) => {
  const id = Math.random() * Math.pow(10, digit);
  return Math.floor(id);
};

export default GetRandomNumber;

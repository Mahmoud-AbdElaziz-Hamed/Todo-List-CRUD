import React from "react";

export const getRandomNumber = (digit) => {
  let id;
  do {
    const randomNumber = Math.random() * Math.pow(10, digit);
    id = Math.floor(randomNumber);
  } while (id.toString()[0] === "0");
  return id;
};

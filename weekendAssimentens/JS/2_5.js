// Ex2.5 - Summation
// Write a program that finds the summation of every number from 1 to num. The number will
// always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const sumy = function (num) {
  result = new Array(num);
  for (let i = 0; i < result.length; i++) {
    result[i] = i + 1;
  }
  return result.reduce((acc, cur) => acc + cur);
};
console.log(sumy(2));

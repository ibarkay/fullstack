// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const results = {};

function findUniq(arr) {
  arr.forEach((element) => {
    // console.log(element);
    results[element] = (arr.join('').split(element)).length;
  });
  console.log(Object.keys(results).reduce((acc, curr) => ((acc > curr) ? acc : curr)));
}

// const findUniq = (arr) => arr.forEach((element) => {
//   console.log(element);
//   results[element] = (arr.join('').split(element)).length;
//   // console.log(results);
// });
// console.log(results);

findUniq([0, 0, 0.55, 0, 0]);

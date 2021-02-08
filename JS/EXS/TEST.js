const fn = (function (wellcome) {
  return wellcome;
}('Welcome to Appleseeds Bootcamp!'));

const power = (a) => Math.pow(a, 2);

const squareRoot = (function (a) {
  return Math.sqrt(a);
}(4));

const randomNumbers = (function (a, b) {
  return Math.random() * (a - b) + b;
}(2, 100));

console.log(randomNumbers);

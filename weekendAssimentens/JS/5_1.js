// Ex5.1 - trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.
const trimming = function (str) {
  str = str.split('');
  str.pop(str[str.length - 1]);
  console.log(str);
  str.shift();

  return str.join('');
};

console.log(trimming('iftach barkay'));

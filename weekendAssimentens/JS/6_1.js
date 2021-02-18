// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z

const Mumbling = (str) => {
  str = str.split('');
  const result = '';
  const mapy = str.map((x, index) => x.toUpperCase() + x.repeat(index)).join('-');
  return mapy;
};

console.log(Mumbling('iftach'));

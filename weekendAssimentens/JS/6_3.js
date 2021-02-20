// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (str1, str2) => {
  const resObj = {};
  const arr = (str1 + str2).toLowerCase().split('');
  for (const char of arr) {
    resObj[char] = null;
  }
  console.log(Object.keys(resObj).sort().join(''));
};
// test
a = 'xyaabbbccccdefww';
b = 'xxxxyyyyabklmopq';
longest(a, b);

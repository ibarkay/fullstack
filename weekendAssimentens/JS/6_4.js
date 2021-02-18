// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

const isIsogram = (str) => {
  const obj = {};
  str2 = str.split('');
  for (const char of str2) {
    obj[char] = str.split(char).length - 1;
  }
  if (Object.values(obj).join(',').match(/[2-9]/)) {
    return false;
  }
  return true;
};
console.log(isIsogram('Dermatoglyphics'));

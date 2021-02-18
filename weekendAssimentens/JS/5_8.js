// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.
const longest = (str) => {
  const words = {};
  const listy = str.split(' ');
  for (const word of listy) {
    words[word.length] = word;
  }
  return Object.values(words)[Object.keys(words).length - 1];
};
console.log(longest('iftach barkay is the leet.'));

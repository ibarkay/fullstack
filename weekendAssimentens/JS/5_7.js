// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
const shortest = (str) => {
  const words = {};
  const listy = str.split(' ');
  for (const word of listy) {
    words[word.length] = word;
  }
  return Object.keys(words)[0];
};
console.log(shortest('iftach barkay is the leet.'));

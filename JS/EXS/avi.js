const pepole = [
  { id: '1', name: 'iftach', age: 36 },
  { id: '2', name: 'yaar', age: 6 },
  { id: '3', name: 'gali', age: 32 },
];

let result;

// result = pepole.reduce((acc, preson) => acc += preson.age, 0);

// console.log(result);

// result = pepole.reduce((acc, person) => acc += 1, 0);
// console.log(result);

// array of names (map)
result = pepole.reduce((acc, preson) => [...acc, preson.name], []);
console.log(result);

// get max age
result = pepole.reduce((acc, person) => {
  if (person.age > acc) {
    return person.age;
  }
  return acc;
});
console.log(result);

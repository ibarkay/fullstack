const names = ['iftach', 'gali', 'yaar'];

const object = [
  { name: 'iftach', lan: 'hebrew', id: 1 },
  { name: 'gali', lan: 'english', id: 2 },
  { name: 'yaar', lan: 'arabic', id: 3 },
];

const english = object.find((i) => i.lan === 'english');
// console.log(english);

const filterName = (i) => i.lan === 'english';
const myFillter = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i]);
    }
  } return result;
};
const myFiltered = myFillter(object, filterName);
console.log(myFiltered);

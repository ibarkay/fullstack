// Implement Functionality
// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)

// filtter
function filtter(arr, filt) {
  ret = [];
  for (let i = 0; i < arr.length; i++) {
    (arr[i] === filt) ? ret.push(arr[i]) : null;
  }
  return ret;
}
console.log(filtter([1, 2, 3, 4, 5, 5, 5, 5, 6], 5));

function ForEachy(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

console.log(ForEachy([1, 2, 3, 4, 5, 6], (i) => { console.log(i); }));

function Mapy(arr, cb) {
  arr2 = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = cb(arr[i]);
  }
  return arr2;
}

console.log(Mapy([1, 1, 1, 1, 1, 1], (i) => i + 1));

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const d = new Date();

function dayz() {
  return `Today is ${days[d.getDay()]} the ${d.getDate()} of ${monthNames[d.getMonth()]}, ${d.getFullYear()}`;
}
console.log(dayz());

let iftach = 'iftach';
iftach += 'i';
console.log(iftach);

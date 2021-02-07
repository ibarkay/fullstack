console.log('its works!');

// function deff
let bill = 100;
// const taxRate = 0.13;




function calculateBill(billAmont,taxRate) {
  // this is the func body
  console.log('running ...');
  const total = billAmont * (1 + taxRate) ; 
  return total;
}

// function call - run
const myTotal =  calculateBill(100,0.13);

function doctor(name) {
  return `Dr. ${name}`;

}
// defult args
function yell(name = 'no name'){
  return `Hey ${name.toUpperCase()}`;

}

console.log(yell('iftach'));
console.log(yell(doctor('iftach')));
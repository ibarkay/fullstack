// Instructions
// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
// console.log(this);  ---- window , no this parent
// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code. --- use named function. greet: function greet()
// const myObj = {
//  name: "Timmy",
//  greet: () => {
//  console.log(`Hello ${this.name}`); -- there is no name for window , arrow function will not inherit this
//  },
// };
// myObj.greet();
// Question 3:
// In your own words what will this point to and why? --- this is now window ... no this inherit
// const myFuncDec = function () {
//  console.log(this);
// };
// Question 4:
// In your own words what will this point to and why?  window , function arrow will look to inherit
// const myFuncArrow = () => {
//  console.log('dsad',this);
// };
// myFuncArrow();
// Question 5:
// a. In your own words what will this point to and why. - code will not work a- no elment wiht element class b-event listernr need a event c- arrow function will not inheit the event .
// b. How can you fix this code. example below ...
const bod = document.querySelector('body');
const divy = document.createElement('div');
divy.classList.add('element');
divy.innerHTML = 'text';
// console.log(bod,divy);
bod.append(divy);
document.querySelector('.element').addEventListener('click', function logy() {
  console.log(this);
});

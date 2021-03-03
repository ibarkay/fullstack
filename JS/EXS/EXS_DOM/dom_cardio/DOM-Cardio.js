// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('warper');
// put it into the body
document.body.append(div);
// make an unordered list
const ul = `<ul>
      <li>one</li>
      <li>tow</li>
      <li>three</li>
</ul>`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;
console.log(div);
// create an image
const img = document.createElement('img');
img.src = 'http://picsum.photos/500';

// set the source to an image
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute puppy';
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHtml = `<div class="myDiv">
  <p>lorem spasem</p>
  <p>lorem spasem</p>
</div>

`;
// add a class to the second paragraph called warning
// remove the first paragraph
const ulElemnt = div.querySelector('ul');
console.log(ulElemnt);
ulElemnt.insertAdjacentHTML('beforebegin', myHtml);
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const myDiv = document.querySelector('.myDiv');
console.log(myDiv);
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be ${}. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
     <h2>${name} — ${age}</h2>
     <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
     <button class='delete' type='button'>Delete</button>
   </div>
  `;
  return html;
}
// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('iftach', 35, 181);
cardsHTML += generatePlayerCard('gali', 30, 161);
cardsHTML += generatePlayerCard('yaar', 5, 90);
// console.log(cardsHTML);
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function deleteCard(event) {
  const btnGotClicked = event.currentTarget;
  btnGotClicked.parentElement.remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));

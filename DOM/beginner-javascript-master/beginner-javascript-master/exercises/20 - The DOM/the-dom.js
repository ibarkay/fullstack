// /* eslint-disable no-console */
// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.items img');
// const item2 = document.querySelector('.item2');
// const heading = document.querySelector('h2');

// const pizzaList = document.querySelector('.pizza');

// pizzaList.textContent = `${pizzaList.textContent} pizza`;
// console.log(pizzaList.textContent);

// pizzaList.insertAdjacentText('afterbegin', 'pizza');

// class
const pic = document.querySelector('.nice');

pic.classList.remove('cool');

function toggleAriund() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleAriund);

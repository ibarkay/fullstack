const cardContainer = document.querySelector('.todos-con');
const userInput = document.querySelector('input');
const submitTodo = document.querySelector('.btn-submit');
const plusBtn = document.querySelector('.plus-btn');
const todoUserDisplay = document.querySelector('.todo-user');
const closeBtn = document.querySelector('.btn-close');
const editPop = document.querySelector('.edit-pop');
const btnEdit = document.querySelector('.btn-edit');
const btnCloseEdit = document.querySelector('.btn-close-edit');
const editTxtInput = document.querySelector('#editTxt');

let idCounter = 0;
let todoList = [];
let currentKey = 99;

// !testing the localstorage
localStorage.clear();

// ev on edit btn
btnEdit.addEventListener('click', (e) => {
  localStorage.setItem(currentKey, `${editTxtInput.value}`);
  render();
});
// ev on closeEditBTN
btnCloseEdit.addEventListener('click', () => {
  editPop.style.visibility = 'hidden';
});
// ev on sumbit
submitTodo.addEventListener('click', () => {
  if (userInput.value.length > 0) {
    createTodo();
  }
});
// ev on Plust btn
plusBtn.addEventListener('click', () => {
  todoUserDisplay.style.visibility = 'visible';
});
// ev on closeBTN
closeBtn.addEventListener('click', () => {
  todoUserDisplay.style.visibility = 'hidden';
});
// storage as array of arrays

//----------------------------------
// Add todo item
function createTodo() {
  localStorage.setItem(`${idCounter}`, `${userInput.value},false`);
  render();
}
// ---------------------------------
function createCard(t) {
  const splity = t[1].split(',');
  idCounter++;
  const cardy = document.createElement('div');
  const texty = document.createElement('h1');
  const deleteBtn = document.createElement('button');
  const cheky = document.createElement('input');
  cardy.setAttribute('data', `${t[0]}`);
  cheky.setAttribute('type', 'checkbox');
  // ev CHECKBOX
  cheky.addEventListener('click', (e) => {
    // console.log(splity[1]);
    // console.log(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      localStorage.setItem(t[0], `${splity[0]},true`);
      console.log(localStorage);
    }else{
      localStorage.setItem(t[0], `${splity[0]},false`);
      console.log(localStorage);
    }
  });
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = 'Delete';
  // ev DELETE btn
  deleteBtn.addEventListener('click', (e) => {
    localStorage.removeItem(e.currentTarget.parentElement.getAttribute('data'));
    render();
  });
  const editBtn = document.createElement('button');
  editBtn.classList.add('delete-btn');
  editBtn.innerHTML = 'Edit';
  // ev EDIT btn
  editBtn.addEventListener('click', (e) => {
    editPop.style.visibility = 'visible';
     

    // localStorage.setItem(e.currentTarget.parentElement.getAttribute('data'),!!!!!);
  });
  cardy.append(texty);
  cardy.append(cheky);
  cardy.classList.add('card');
  texty.textContent = `${splity[0]}`;
  cardy.append(deleteBtn);
  cardy.append(editBtn);

  todoList.push(cardy);
}
function render() {
  todoList = [];
  cardContainer.innerHTML = '';
  const storage = Object.entries(localStorage);
  for (const t of storage) {
    createCard(t);
  }

  console.log(storage);
  for (const m of todoList) {
    cardContainer.append(m);
  }
}

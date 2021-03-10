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
const displayAllBtn = document.querySelector('.display-all-btn');

let idCounter = 0;
let todoList = [];
let divList = [];
let state = {};
let currentKey = 99;

// !testing the localstorage

// state object
const store = JSON.stringify(localStorage);
const store2 = JSON.parse(store);
console.log(store2.data);
if (store2.data) {
  todoList = JSON.parse(store2.data);
  idCounter = todoList.length;
}

// ev on displayAllBtn
displayAllBtn.addEventListener('click', () => {
  render();
});
// ev on edit btn
btnEdit.addEventListener('click', (e) => {
  // localStorage.setItem(currentKey, `${editTxtInput.value}`);
  todoList[currentKey].text = editTxtInput.value;
  editTxtInput.value = '';
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
  state = {};
  state.id = idCounter;
  state.text = `${userInput.value}`;
  state.isComplete = false;
  state.createdIn = new Date();
  userInput.value = '';
  const check = todoList.find((x) => x.text === state.text);
  console.log(todoList);
  if (!check) {
    todoList.push(state);
    idCounter++;
    render();
  }
}
// ---------------------------------
function createCard(t) {
  const cardy = document.createElement('div');
  const texty = document.createElement('h1');
  const texty2 = document.createElement('h5');
  const deleteBtn = document.createElement('button');
  const cheky = document.createElement('input');
  cardy.setAttribute('data', `${t.id}`);
  cheky.setAttribute('type', 'checkbox');
  if (t.isComplete) {
    cheky.checked = true;
  } else {
    cheky.checked = false;
  }
  // ev CHECKBOX
  cheky.addEventListener('click', (e) => {
    if (e.currentTarget.checked) {
      t.isComplete = true;
    } else {
      t.isComplete = false;
    }
  });
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = 'Delete';
  // ev DELETE btn
  deleteBtn.addEventListener('click', (e) => {
    const indexy = todoList.indexOf(Number(e.currentTarget.parentElement.getAttribute('data')));
    todoList.splice(indexy, 1);
    render();
  });
  const editBtn = document.createElement('button');
  editBtn.classList.add('delete-btn');
  editBtn.innerHTML = 'Edit';
  // ev EDIT btn
  editBtn.addEventListener('click', (e) => {
    editPop.style.visibility = 'visible';
    currentKey = e.currentTarget.parentElement.getAttribute('data');
  });
  cardy.append(texty);
  cardy.append(texty2);
  cardy.append(cheky);
  cardy.classList.add('card');
  texty.textContent = `${t.text}`;
  texty2.textContent = `${t.createdIn}`;
  cardy.append(deleteBtn);
  cardy.append(editBtn);

  divList.push(cardy);
}
function render() {
  todoList.sort((a, b) => a.isComplete - b.isComplete);
  divList = [];
  cardContainer.innerHTML = '';
  const toLS = JSON.stringify(todoList);
  localStorage.setItem('data', toLS);
  for (const t of todoList) {
    createCard(t);
  }
  for (const m of divList) {
    cardContainer.append(m);
  }
}

console.log('🏊 ');
const arrTodo = [];
const counter = 0;

function addItem(name) {
  const objy = {};
  objy.name = name;
  objy.mark = false;
  arrTodo.push(objy);
}
function deleteItem(name) {
  const pos = arrTodo.map((e) => e.name).indexOf(name);
  arrTodo.splice(pos, 1);
}
function findItemByName(name) {
  const item = arrTodo.find((x) => x.name === name);
  return item;
}
function markItem(name) {
  const item = findItemByName(name);
  item.mark = true;
}
function unmarkItem(name) {
  const item = findItemByName(name);
  item.mark = false;
}
function listArr() {
  const retArray = Array.from(arrTodo);
  retArray.sort((a, b) => a.mark - b.mark);
  console.log(retArray);
}

// trys
addItem('iftach');
addItem('iftach1');
addItem('iftach2');
addItem('iftach3');
addItem('iftach4');
markItem('iftach2');
console.log(arrTodo);

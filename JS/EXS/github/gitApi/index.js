console.log('🏊 ');

const gitAPI = 'https://api.github.com/users/';
const btnName = document.querySelector('button');
const nameInput = document.querySelector('input');
const bod = document.querySelector('body');
const boxy = document.createElement('div');
boxy.classList.add('box');
bod.append(boxy);
let username = '';
btnName.addEventListener('click', () => {
  username = nameInput.value;
  console.log(nameInput.value);
  fetchData();
});

async function fetchData() {
  const resp = await fetch(`${gitAPI}${username}`);
  const data = await resp.json();

  const divy = document.createElement('div');
  divy.classList.add('user');

  const picy = document.createElement('img');
  picy.src = `${data.avatar_url}`;
  divy.append(picy);
  const linky = document.createElement('a');
  linky.href = `${data.html_url}`;
  linky.innerHTML = `${data.name}`;

  divy.append(linky);
  boxy.append(divy);
}

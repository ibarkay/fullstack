console.log('🏊 ');
// ! TODO : error handling with catch...
const gitAPI = 'https://api.github.com/users/';
const btnName = document.querySelector('button');
const nameInput = document.querySelector('input');
const bod = document.querySelector('body');
const boxy = document.createElement('div');
boxy.classList.add('box');
bod.append(boxy);
let username = '';
const listOfUseres = [];
btnName.addEventListener('click', () => {
  username = nameInput.value;
  fetchData();
});
bod.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    username = nameInput.value;
    fetchData();
  }
});

async function fetchData() {
  const resp = await fetch(`${gitAPI}${username}`);
  console.log(resp.ok);
  const data = await resp.json();

  const divy = document.createElement('div');
  divy.classList.add('user');

  const picy = document.createElement('img');
  picy.src = `${data.avatar_url}`;
  divy.append(picy);
  const linky = document.createElement('a');
  linky.href = `${data.html_url}`;
  linky.innerHTML = `${data.name}`;

  if (!listOfUseres.includes(`${data.name}`) && (!data.message)) {
    console.log(data);
    divy.append(linky);
    boxy.append(divy);
  } else {
    alert('user allready used ... or no such User 🔚 ');
  }
  listOfUseres.push(`${data.name}`);
}

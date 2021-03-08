console.log('🧔');

const fact = document.querySelector('.meme');
const API = 'https://v2.jokeapi.dev/joke/Any';

async function getMeme() {
  const resp = await fetch(`${API}`);
  const data = await resp.json();
  // setup , delivery
  const heading2 = document.createElement('h2');
  heading2.innerHTML = `${data.setup}`;
  fact.append(heading2);
  
}
getMeme();

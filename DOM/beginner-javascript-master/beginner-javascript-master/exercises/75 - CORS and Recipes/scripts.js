const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = ''
async function fetchRecipes(query) {
  const response = await fetch(`http://www.whateverorigin.org/get?url=${baseEndpoint}?q=${query}`);
  const data =  response.json();
  console.log(data);
}

fetchRecipes('pizza');

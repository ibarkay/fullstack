const myP = document.createElement('p');
myP.textContent = 'im a p';
myP.classList.add('special');

const myImg = document.createElement('img');
myImg.src = 'https://source.unsplash.com/random/300x300';

const myDiv = document.createElement('div');

myDiv.append(myP);
myDiv.append(myImg);

const ealal = document.createElement('h2');
ealal.textContent = 'cool stuff!';

myDiv.insertAdjacentElement('afterbegin', ealal);
document.body.append(myDiv);

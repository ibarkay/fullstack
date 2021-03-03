// We want a user to type a movie name in an input and get
// the following data displayed on the screen:
// ! Movie poster
// ! Movie title
// ! Genre
// ! Year
// ! Plot
// ! Director
// ! Actors
// ! Ratings of movies from imdb, rotten tomatoes and
// metacritic.
// (make sure that particular movie gives you all the ratings.
// It could be, that movie won’t give you all 3 ratings)
//! Each time a user searches for a new movie remove the old
// movie from the screen.

console.log('🏊 ');
const token = 'c86b2ed';
const apiRequests = `http://www.omdbapi.com/?apikey=${token}&`;
const userInput = document.querySelector('input');
const btn = document.querySelector('button');
const infoToUser = document.querySelector('.data-container');

btn.addEventListener('click', () => {
  console.log('clicked 🏊 ');
  const movie = userInput.value;
  infoToUser.innerHTML = '';
  searchMovie(movie);
});

async function searchMovie(movie) {
  const resp = await fetch(`${apiRequests}t=${movie}`);
  const data = await resp.json();
  console.log('🎥 ', data);

  // ! poster
  const poster = `${data.Poster}`;
  const imgPoster = document.createElement('img');
  imgPoster.src = poster;
  infoToUser.append(imgPoster);
  // ! title ,year
  const titleMovie = document.createElement('h3');
  titleMovie.innerHTML = `${data.Title} , ${data.Year}`;
  infoToUser.append(titleMovie);
  // ! Genre
  const genreMovie = document.createElement('p');
  genreMovie.innerHTML = `${data.Genre}`;
  infoToUser.append(genreMovie);
  // ! Plot
  const plot = document.createElement('p');
  plot.innerHTML = `${data.Plot}`;
  infoToUser.append(plot);
  // ! Director & Actors
  const cast = document.createElement('p');
  cast.innerHTML = `direct by : ${data.Director} , Actors : ${data.Actors}`;
  infoToUser.append(cast);
  // ! Ratings
  const ratings = document.createElement('p');
  for (let i = 0; i < data.Ratings.length; i++) {
    console.log(`${data.Ratings[i].Source} : ${data.Ratings[i].Value}`);
    ratings.innerHTML += `${data.Ratings[i].Source} : ${data.Ratings[i].Value} \n`;
  }
  
  infoToUser.append(ratings);
}

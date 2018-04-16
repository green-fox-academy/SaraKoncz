
let url = 'http://api.icndb.com/jokes/random'

let button = document.querySelector('button');
let jokeDiv = document.querySelector('div');

button.addEventListener('click', function () {

  fetch(url)
    .then((response) => response.json())
    .then((myJson) => {
      let joke = document.createElement('p');
      joke.innerHTML = myJson.value.joke;
      jokeDiv.appendChild(joke);
    });
});

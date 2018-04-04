'use strict';

document.querySelectorAll('.submitbuttons').forEach(e => {
  e.disabled = true;
})

var loveCatsButton = document.querySelector('#loveCatsButton');
var signUpButton = document.querySelector('#signUpButton');
var favAnimal = document.querySelectorAll('input[name="animal"]');
var catLoveStatus = document.querySelectorAll('input[name="lovecats"]');

loveCatsButton.addEventListener('click', remindmessage);

function remindmessage(e) {
  alert('Then please go and sign up!');
  e.preventDefault();
}

signUpButton.addEventListener('click', alertmessage);

function alertmessage() {
  alert('Thank you, you\'ve successfully signed up for cat facts');
}

favAnimal.forEach(e => {
  e.addEventListener('click', animalSelect)
})

function animalSelect(e) {
  let animalValue = e.target.defaultValue;
  if (animalValue === 'dog') {
    signUpButton.disabled = false;
    loveCatsButton.disabled = true;
  }
  if (animalValue === 'cat') {
    loveCatsButton.disabled = false;
    signUpButton.disabled = false;
  }
  if (animalValue === 'victor') {
    loveCatsButton.disabled = true;
    signUpButton.disabled = true;
  }
}

catLoveStatus.forEach(e => {
  e.addEventListener('click', catLoveMaker)
})

function catLoveMaker(e) {
  let catValue = e.target.defaultValue;
  if (catValue === 'yes') {
    loveCatsButton.disabled = false;
  }
  if (catValue === 'no') {
    loveCatsButton.disabled = true;
  }
}

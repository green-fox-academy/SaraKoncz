'use strict';

document.addEventListener('DOMContentLoaded', catchChoice);

function catchChoice() {
  document.querySelector('select[name="categories"]').onchange = checkChoice;
};

function checkChoice(e) {
  let chosenCategory = e.target.value;
  if (chosenCategory === 'empty') {
    document.querySelectorAll('select[name=movies]').forEach(e => {
      e.disabled = true;
    });
  } else {
    document.querySelectorAll('select[name=movies]').forEach(e => {
      e.disabled = false;
    });
    switch (chosenCategory) {
      case 'scifi':
        document.querySelectorAll('.drama').forEach(e => {
          e.disabled = true;
        });
        document.querySelectorAll('.comedy').forEach(e => {
          e.disabled = true;
        });
        document.querySelectorAll('.scifi').forEach(e => {
          e.disabled = false;
        });
        break;
      case 'drama':
        document.querySelectorAll('.scifi').forEach(e => {
          e.disabled = true;
        });
        document.querySelectorAll('.comedy').forEach(e => {
          e.disabled = true;
        });
        document.querySelectorAll('.drama').forEach(e => {
          e.disabled = false;
        });
        break;
      case 'comedy':
        document.querySelectorAll('.scifi').forEach(e => {
          e.disabled = true;
        });
        document.querySelectorAll('.drama').forEach(e => {
          e.disabled = true;
        });
        document.querySelectorAll('.comedy').forEach(e => {
          e.disabled = false;
        });
        break;

    }
  }
}

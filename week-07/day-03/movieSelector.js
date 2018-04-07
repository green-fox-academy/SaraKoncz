'use strict';

document.querySelectorAll('select[name=movies]').forEach(e => {
  e.disabled = true;
});

document.addEventListener('DOMContentLoaded', catchChoice);

function catchChoice(){
  document.querySelector('select[name="categories"]').onchange = checkChoice;  
};

function checkChoice (e) {
  console.log(e.target.value);
}

// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('select[name="categories"]').onchange = changeEventHandler;
// }, false);

// function changeEventHandler(event) {
//   // You can use “this” to refer to the selected element.
//   if (!event.target.value) {
//     alert('Please Select One');
//   }
//   else {

//   }
// }
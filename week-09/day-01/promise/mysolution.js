'use strict';

// let message = ('FULFILLED!');

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(function () {
//     fulfill(message);
//   }, 300);
// });

// promise.then( (message) => {
// console.log(message);
// });

// 'use strict';

//     // Create a promise

//     var promise = new Promise(function (fulfill, reject) {
//       // After the timeout reaches 300ms, fulfill the promise with value
//       // 'FULFILLED!'.

//       setTimeout(function () {
//         fulfill('FULFILLED!');
//       }, 300);
//     });

// //let message = ('REJECTED!');
var promise = new Promise(function (fulfill, reject) {
  
  
});

// function onReject(error) {
//   console.log(error.message);
// }

// promise.then(console.log, onReject);
// console.log('MAIN PROGRAM');

// promise.then(null, function (err) {
//   console.error('THERE IS AN ERROR!!!');
//   console.error(err.message);
// });

//You could simply write

promise.catch(function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});


// Introducing: Promise.resolve
// It does the exact same thing as above:

var promise1 = Promise.resolve('SECRET VALUE');


var promise2 = Promise.reject(new Error('SECRET VALUE'));
/*'use strict';

console.log(['apple', 'pear', 'melon'].indexOf('pear')); // 1

let num = [7, 8, 9];
num.forEach(function (value) {
  console.log(value);
}); 

['apple', 'pear', 'melon'].forEach(function(e, i) {
  console.log(e, i);
});


let triples = [1, 2, 3, 4, 5].map(function(e) {
  return e * 3;
});
console.log(triples); /** [3, 6, 9, 12, 15] */


'use strict';

let numberArray: number[] = [2,1,2,3,4,5];
console.log(`The numberArray.length`);

numberArray.push(1);
console.log(numberArray);

let returnValue: number = numberArray.shift();
console.log(returnValue);
console.log(numberArray);

numberArray.unshift(42);
console.log(numberArray);

let indexOfValue: number = numberArray.indexOf(1);
console.log(indexOfValue);

let sliceValue: number[] = numberArray.slice(0,3);
console.log(sliceValue);

console.log(numberArray.concat(sliceValue));

numberArray.splice(4,2);
console.log(numberArray);

numberArray.forEach(function (item: number, index: number){
  item += 2;
  numberArray[index] = numberArray[index] + 2;
  console.log(numberArray[index]);
  console.log(item);
});

console.log(numberArray);

let filternumberArray: number[] = numberArray.filter(arrayFilter => arrayFilter > 3);
console.log(filternumberArray);

numberArray = numberArray.map(arrayMap => arrayMap + 2);
console.log(numberArray);

function isSomeBelow(elements: number): boolean {
  return elements < 30;
}
console.log(numberArray.some(isSomeBelow));

function isEveryUnder(elements: number): boolean {
  return elements > 30;
}
console.log(numberArray.every(isEveryUnder));
/*
let evens = [1, 2, 3, 4, 5].filter(function(e) {
  return e % 2 == 0;
});
console.log(evens); /** [2, 4] 


let isAllEven = [2, 6, 14, 5, 4].every(function(e) {
  return e % 2 == 0;
});
console.log(isAllEven); /** false 


let isAnyEven = [2, 6, 14, 5, 4].some(function(e) {
  return e % 2 == 0;
});
console.log(isAnyEven); /** true 


let letters = 'apple'.split('');
console.log(letters); /** ['a', 'p', 'p', 'l', 'e'] 
console.log(letters.join('@'));  Worms in the apple! */
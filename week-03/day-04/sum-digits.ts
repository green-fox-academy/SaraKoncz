// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
'use strict';
let divide: number = 10;
let sum: number = 0;
let num: number = 12481;
function sumDigits(num: number): number {
  let b: number = Math.floor(num % 10);
  console.log(b);
  if (num < 1) {
    return 0;
  }
  return b += sumDigits((num / 10));
}

console.log(sumDigits(12481));


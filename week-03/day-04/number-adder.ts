// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
'use strict';
function sumNumbers (num: number): any {
  if (num < 1 ) {
    return num;
  }
  return num + (sumNumbers(num -1));
}

console.log(sumNumbers(8));
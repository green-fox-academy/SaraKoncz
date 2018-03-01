// Write a recursive function that takes one parameter: n and counts down from n.
'use strict';

function countDown (num: number): number {
  if (num < 1) {
    return 0;
  }
  return countDown(num -1);
}

console.log(countDown(5));
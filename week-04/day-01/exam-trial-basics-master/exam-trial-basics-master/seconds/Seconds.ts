// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the orignal list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result
'use strict';

let allNumber: number[] = [1, 2, 3, 4, 5];

function everySecond(list: number[]): number[] {
  let secondNumbers: number[] = [];
  for (let i: number = 0; i < list.length; i++) {
    if (i % 2 === 1) {
      secondNumbers = secondNumbers.concat(list[i]);
    }
  }
  return secondNumbers;
}

console.log(everySecond(allNumber));

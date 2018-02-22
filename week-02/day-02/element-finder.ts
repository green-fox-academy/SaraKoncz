'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!
function containsSeven(num: number[]) {
  let contains: boolean = false;
  for (let i = 0; i < num.length; i++) {
    let seven: number = 7;
    if (num[i] === seven) {
      contains = true;
    }
  }
  if (contains == true) {
    return 'Hoorray';
  } else {
    return 'Noooooo';
  }
}

console.log(containsSeven(numbers));

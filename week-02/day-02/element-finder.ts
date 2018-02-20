'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
//ver 1.0
function containsSeven (arr: number[]): string {
  let check: number = 0;
  check = arr.join(' ').indexOf(' 7 ');
  if (check == -1) {
    return "Noooooo"
  } else {
  return "Hoorray";
  }
}

//ver 2.0
/*function containsSeven (arr: number[]): string {
    let check: string = 'Noooooo';
    arr.forEach (function (item) {
      if (item == 7) {
        check = 'Hoorray';
      }
    });
    return check;
  }*/
  console.log(containsSeven(numbers));


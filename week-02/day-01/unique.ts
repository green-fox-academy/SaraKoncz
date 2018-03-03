//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
'use strict';
function unique(arr) {
  for (let i = 0; i <= arr.length; i++) {
    let removed: number[] = arr.splice(0, 1);
    let num: number = removed[0];
    if (arr.indexOf(num) === -1) {
      arr = arr.concat(removed);
    }
  }
  return arr;
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending
//  Example:
'use strict';
function bubble(list: number[]) {
  list.sort(function (a, b) {
    return a - b;
  })
  return list;
}

console.log(bubble([34, 12, 24, 9, 5]));

function advancedBubble(list: number[]) {
  if (list[0] < list[1]) {
    list.sort(function (a, b) {
      return b - a;
    })
  }
  return list;
}

console.log(advancedBubble([34, 24, 12, 9, 5]));

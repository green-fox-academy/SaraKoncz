// Given a string, compute recursively a new string where all the 'x' chars have been removed.
'use strict';
function xRemove(text1: string): string {
  if (text1.indexOf('x') === -1) {
    return text1;
  }
  text1 = text1.replace('x', '');
  return xRemove(text1);
}

let firstText: string = 'This text should have manx x-s instead of manx X-s.';
console.log(firstText);
console.log(xRemove(firstText));
// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.
'use strict';
function xToy (text1: string): string {
if (text1.indexOf('x')=== -1){
  return text1;
}
  text1 = text1.replace('x','y');
  return xToy(text1);
}

let firstText: string = 'This text should have manx x-s instead of manx X-s.';
console.log(firstText);
console.log(xToy(firstText));
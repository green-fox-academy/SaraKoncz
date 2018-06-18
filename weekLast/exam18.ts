//Create a function that takes two strings and returns an array of characters that consitst all 
//the common letters of the two arrays
'use strict';

export function commonLettersLister(string1: string, string2: string): string[] {
  let commonLetters: string[] = [];
  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2[j]) {
        commonLetters.push(string1[i]);
        for (let k = 0; k < i; k++) {
          if (string1[k] === string1[i]) {
            commonLetters.pop();
          }
        }
      }
    }
  }
  return commonLetters;
}

console.log(commonLettersLister('acabc', 'cadexxxxxx'));

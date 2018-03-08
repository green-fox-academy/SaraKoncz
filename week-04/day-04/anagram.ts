'use strict';
export function anagram(string1: string, string2: string): boolean {
  let checkanagram: boolean = true;
  if (string1.length !== string2.length) {
    checkanagram = false;
  } else {
    let string1Array: string[] = string1.split('', string1.length);
    let string2Array: string[] = string2.split('', string2.length);
    let counter: number = 0;

    string1Array.forEach(e => {
      string2Array.forEach((l, i, a) => {
        if (e === l) {
          a[i] = '1';
          e = '0';
          counter++;
        }
      })
    })
    if (counter !== string1.length) {
      checkanagram = false
    }
  }
  return checkanagram
}

console.log(anagram('alma', 'lama'));

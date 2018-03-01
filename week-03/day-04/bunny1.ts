// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively 
//(without loops or multiplication).
'use strict';
function countFloopyBunnyEars (bunny: number): number {
  let bunnyEars: number = 0;
  if (bunny <1) {
    return bunnyEars;
  }
  bunnyEars += 2;
  bunny -= 1;
  return  bunnyEars += countFloopyBunnyEars (bunny);
}

console.log(countFloopyBunnyEars(4));
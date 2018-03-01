// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
'use strict';
function countFloopyBunnyEars(bunny: number): number {
  let bunnyEars: number = 0;
  if (bunny < 1) {
    return bunnyEars;
  }
  bunnyEars += 2;
  bunny -= 1;
  if (bunny < 1) {
    return bunnyEars;
  }
  bunnyEars += 3;
  bunny -= 1;
  return bunnyEars += countFloopyBunnyEars(bunny);
}

console.log(countFloopyBunnyEars(1));
console.log(countFloopyBunnyEars(2));
console.log(countFloopyBunnyEars(3));
console.log(countFloopyBunnyEars(4));
console.log(countFloopyBunnyEars(5));
console.log(countFloopyBunnyEars(6));
console.log(countFloopyBunnyEars(7));
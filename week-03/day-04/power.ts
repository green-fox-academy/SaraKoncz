// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
'use strict';
function powerN(base: number, n: number): number {
  let multi: number = 1;
  if (n < 1) {
    return multi;
  }
  multi *= base;
  n -= 1;
  return multi *= powerN(base, n);
}

console.log(powerN(4, 3));
// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
'use strict';
let size: number = 4;
let matrix2: any[] = [];

for (let i = 0; i <= size; i++) {
  matrix2[i] = [];
  for (let j = 0; j <= size; j++) {
    if (j === size - i) {
      matrix2[i][j] = 1;
    } else {
      matrix2[i][j] = 0;
    }
  }
}

console.log(matrix2);
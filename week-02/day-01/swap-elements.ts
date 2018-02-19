// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`

'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];
console.log(abc);

//Method1: this is really not nice but works
/*let swapped1: string[] = abc.splice(0, 1, "Chloe");
console.log(abc);

let swapped2: string[] = abc.splice(2, 1, "Arthur");
console.log(abc);*/

//Method2: this is nicer
let abc1: string[] = new Array();
abc1[1] = abc[1];
abc1[2] = abc[0];
abc1[0] = abc[2];
console.log (abc1);




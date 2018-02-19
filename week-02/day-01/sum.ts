// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

'use strict';
let numBer: number = 5;
let res: number = 0;
function sum (summ: number): number {
    for (let i = 0; i <= summ; i++){
        res=res+i;
    }
    return res;
}

console.log(sum(numBer));

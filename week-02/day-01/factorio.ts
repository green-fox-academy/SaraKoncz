// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';
function factorio (fact: number): number {
    let result: number= 1;
    for (let i = 1; i <= fact; i++ ) {
result = result * i;
    }
    return result;
}

let numBer: number = 5;
console.log(factorio(numBer));
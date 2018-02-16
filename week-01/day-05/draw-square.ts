'use strict';

let lineCount: number = 6;
let symbol: string = '';
let p: string = '%';
let space: string = '';

for (let i: number = 1; i <= lineCount; i++) {
    symbol += '%';
    if (i === lineCount) {
    console.log(symbol);
    }
}
symbol = '';

for ( let i: number = 1; i <= (lineCount-2); i++) {
    for (let i: number = 1; i < (lineCount-3); i++) {
        space += ' ';
        }
    console.log(p, space, p);
    space = '';
}

for (let i: number = 1; i <= lineCount; i++) {
        symbol += '%';
        if (i === lineCount) {
        console.log(symbol);
        }
}


// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
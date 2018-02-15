'use strict';

let lineCount: number = 4;
let s: string = '*';


for ( let i: number = 1; i <= lineCount; i++) {
    for (let j: number = 1; j<=1; j++){
    console.log(s);
    s += '*';
    }
}

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
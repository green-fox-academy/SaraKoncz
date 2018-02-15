'use strict';

let lineCount: number = 4;
let tree: string = '*';
let s: string = '';

for ( let i: number = 1; i <= lineCount; i++) {
    for (let k: number = (lineCount-i); k >= 0; k-- ) {
        s+= ' ';
    }    
    console.log(s+tree);
    s = '';
    tree += '**';
}


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
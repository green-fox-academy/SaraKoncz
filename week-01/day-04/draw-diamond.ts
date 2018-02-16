'use strict';

let lineCount: number = 7;
let tree:string = '*';
let s:string = '';

if (lineCount%2 ===0) {
    console.log('Diamonds are odd. Please try again with an odd number!');
} else {
for (let i:number = 1; i <= ((lineCount+1)/2); i++) {
    for (let k:number = (((lineCount+1)/2)-i); k > 0; k-- ) {
        s += ' ';
    }    
    console.log(s+tree);
    s = '';
    tree += '**';
}

for (let i:number = 1; i <= ((lineCount-1)/2); i++) {
    tree ='*';
    s += ' ';
    for (let k:number = ((lineCount)-2*i); k > 1; k-- ) {
        tree += '*';
    }    
    console.log(s+tree);    
}
}


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
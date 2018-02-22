'use strict';

let lineCount: number = 9;
let star:string = '*';
let space:string = '';

if (lineCount%2 ===0) {
    console.log('Diamonds are odd. Please try again with an odd number!');
} else {
for (let i:number = 1; i <= ((lineCount+1)/2); i++) {
    for (let k:number = (((lineCount+1)/2)-i); k > 0; k-- ) {
        space += ' ';
    }    
    console.log(space+star);
    space = '';
    star += '**';
}

for (let i:number = 1; i <= ((lineCount-1)/2); i++) {
    star ='*';
    space += ' ';
    for (let k:number = ((lineCount)-2*i); k > 1; k-- ) {
       star += '*';
    }    
    console.log(space+star);    
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

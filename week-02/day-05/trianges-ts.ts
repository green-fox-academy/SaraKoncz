'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// m coefficient (to calculate the height of the triangle)
let m: number = Math.sqrt(3)/2;
// I decided to make the length of the triangle's sides half of the canvas width
let tl: number = canvas.scrollWidth/2
    ctx.beginPath();
    ctx.moveTo(0, m*tl);
    ctx.strokeStyle = 'pink';
    ctx.lineTo(tl, m*tl);
    ctx.lineTo(tl/2, 0);
    ctx.lineTo(0, m*tl);
    ctx.stroke();

//No we start drawing small triangles in it, first from the top
let stl: number = tl/21;
let start: number = 0;
let stlMoves: number = start + stl;
let c: number = stl/2;

for (let i = 1; i <= 4; i++) {
    ctx.beginPath();
    ctx.moveTo(start, m*tl);
    ctx.strokeStyle = 'blue';
    ctx.lineTo(stlMoves, m*tl);
    ctx.lineTo(c, m*tl-m*stl);
    ctx.lineTo(start, m*tl);
    ctx.stroke();
    start += stl;
    c += stl;
    
    }
    
// for (let i = 1; i <= 21; i++) {
// ctx.beginPath();
// ctx.moveTo(start, m*tl);
// ctx.strokeStyle = 'blue';
// ctx.lineTo(stlMoves, m*tl);
// ctx.lineTo(c, m*tl-m*stl);
// ctx.lineTo(start, m*tl);
// ctx.stroke();
// start += stl;
// c += stl;
// stlMoves *= 1;
// }


/*
//I want 14 lines this time so the distance ("a") between the lines I get by dividing the height by 14
let myLinesCount: number = 14;

function linePlay (height: number, linesCount: number) {
let a: number = height/linesCount;
let x1Zero: number = 0;
let y1: number = 0;
let x2: number = height;
let y2Zero: number = 0;

for (let i = 0; i <= linesCount; i++) { 
    ctx.beginPath();
    ctx.moveTo(x1Zero, y1);
    ctx.strokeStyle = 'blue';
    ctx.lineTo(x2, y2Zero);
    ctx.stroke();  
    y1 += a;  
    x2 -= a;
}
// now wee need to set them again to the original value and insted of Zero-s, use Heights
y1 = 0;
x2 = height;
x1Zero = height;
y2Zero = height;

for (let i = 0; i <= linesCount; i++) {      
    ctx.beginPath();
    ctx.moveTo(x1Zero, y1);
    ctx.strokeStyle = 'blue';    
    ctx.lineTo(x2, y2Zero);
    x2 -= a;
    ctx.stroke();   
    y1 += a;   
}
}

linePlay(myHeight, myLinesCount);

*/
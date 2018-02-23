'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//so here I assume that height < width and therefore we will work with height
let myHeight: number = canvas.scrollHeight

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
let x1Height: number = height;
let y2Height: number = height;

for (let i = 0; i <= linesCount; i++) {      
    ctx.beginPath();
    ctx.moveTo(x1Height, y1);
    ctx.strokeStyle = 'blue';    
    ctx.lineTo(x2, y2Height);
    x2 -= a;
    ctx.stroke();   
    y1 += a;   
}
}

linePlay(myHeight, myLinesCount);


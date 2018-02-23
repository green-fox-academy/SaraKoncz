'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//so here I assume that height < width and therefore we will work with height
let myHeight: number = canvas.scrollHeight

//I want 14 lines this time so the distance ("a") between the lines I get by dividing the height by 14
let myLinesCount: number = 14;
let howManySquares = 64;
let howLong: number = myHeight / Math.sqrt(howManySquares);


function linePlay(height: number, linesCount: number, xstart: number, ystart: number) {
    let a: number = height / linesCount;
    let x1Zero: number = 0 + xstart;
    let y1: number = 0 + ystart;
    let x2: number = height + xstart;
    let y2Zero: number = 0 + ystart;

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
    y1 = 0 + ystart;
    x2 = height + xstart;
    x1Zero = height + xstart;
    y2Zero = height + ystart;

    for (let i = 0; i <= linesCount; i++) {
        ctx.beginPath();
        ctx.moveTo(x1Zero, y1);
        ctx.strokeStyle = 'pink';
        ctx.lineTo(x2, y2Zero);
        x2 -= a;
        ctx.stroke();
        y1 += a;
    }
}


let plusX: number = 0;
let plusY: number = 0;

for (let i = 0; i < Math.sqrt(howManySquares); i++) {
    for (let j = 0; j < Math.sqrt(howManySquares); j++) {
        linePlay(howLong, myLinesCount, plusX, plusY);
        plusY += howLong;
    }
    plusY = 0;
    plusX += howLong;    
}

'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

//so here I assume that height < width and therefore we will work with height
let myHeight: number = canvas.scrollHeight

//I want 14 lines this time so the distance ("a") between the lines I get by dividing the height by 20
let myLinesCount: number = 20;
let howManySquares = 4;
let howLong: number = myHeight / Math.sqrt(howManySquares);

let plusX: number = myHeight / 2;
let plusY: number = myHeight / 2;
function linePlayBlue(height: number, linesCount: number, xstart: number, ystart: number) {
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

}
linePlayBlue(howLong, myLinesCount, plusX, plusY);

function linePlayYellow(height: number, linesCount: number, xstart: number, ystart: number) {
    let a: number = height / linesCount;
    let x1Zero: number = 0 + xstart;
    let y1: number = 0 + ystart;
    let x2: number = 0;
    let y2Zero: number = 0 + ystart;

    for (let i = 0; i <= linesCount; i++) {
        ctx.beginPath();
        ctx.moveTo(x1Zero, y1);
        ctx.strokeStyle = 'yellow';
        ctx.lineTo(x2, y2Zero);
        ctx.stroke();
        y1 += a;
        x2 += a;
    }

}
linePlayYellow(howLong, myLinesCount, plusX, plusY);

plusX = 0;
plusY = 0;
function linePlayPink(height: number, linesCount: number, xstart: number, ystart: number) {
    let a: number = height / linesCount;
    let x1Zero: number = height + xstart;
    let y1: number = 0 + ystart;
    let x2: number = height + xstart;
    let y2Zero: number = height + ystart;

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
linePlayPink(howLong, myLinesCount, plusX, plusY);

function linePlayGreen(height: number, linesCount: number, xstart: number, ystart: number) {
    let a: number = height / linesCount;
    let x1Zero: number = height + xstart;
    let y1: number = 0 + ystart;
    let x2: number = height + xstart;
    let y2Zero: number = height + ystart;

    for (let i = 0; i <= linesCount; i++) {
        ctx.beginPath();
        ctx.moveTo(x1Zero, y1);
        ctx.strokeStyle = 'green';
        ctx.lineTo(x2, y2Zero);
        x2 += a;
        ctx.stroke();
        y1 += a;
    }
}
linePlayGreen(howLong, myLinesCount, plusX, plusY);


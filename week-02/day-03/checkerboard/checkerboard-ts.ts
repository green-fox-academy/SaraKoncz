'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let canWidth: number = canvas.scrollWidth;
let canHeight: number = canvas.scrollHeight;

// width and height of one square will be called "a". This defines the number of raws, which is always 8:
let a: number = canHeight / 8;
//"columnNumber" defines how many times we need to draw a column to fill the canvas
let columnNumber: number = canWidth / a;

function drawColumnBlack(x: number, height: number) {
    let y: number = 0;
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            ctx.fillStyle = 'black';
        } else {
            ctx.fillStyle = 'white';
        }
        ctx.fillRect(x, y, height, height);
        y += height;
    }
}

function drawColumnWhite(x: number, height: number) {
    let y: number = 0;
    for (let i = 0; i < 8; i++) {
        if (i % 2 == 0) {
            ctx.fillStyle = 'white';
        } else {
            ctx.fillStyle = 'black';
        }
        ctx.fillRect(x, y, height, height);
        y += height;
    }
}

function fillBoard(colNumber: number, height: number) {
    let x: number = 0;
    for (let i = 0; i < colNumber / 2; i++) {
        drawColumnBlack(x, height);
        x += height;
        drawColumnWhite(x, height);
        x += height;
    }
}

fillBoard(columnNumber, a);

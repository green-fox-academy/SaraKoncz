'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let width = canvas.width;
let height = canvas.height;
let squareLength = 10;
//Line 1
ctx.lineWidth = 1;
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(((width/2)-(squareLength/2)), ((height/2)-(squareLength/2)));
ctx.lineTo(((width/2)+(squareLength/2)), ((height/2)-(squareLength/2)));
ctx.stroke();

//Line 2
ctx.beginPath();
ctx.moveTo(((width/2)+(squareLength/2)), ((height/2)-(squareLength/2)));
ctx.lineTo(((width/2)+(squareLength/2)), ((height/2)+(squareLength/2)));
ctx.stroke();

//Line 3
ctx.beginPath();
ctx.moveTo(((width/2)+(squareLength/2)), ((height/2)+(squareLength/2)));
ctx.lineTo(((width/2)-(squareLength/2)), ((height/2)+(squareLength/2)));
ctx.stroke();

//Line 4
ctx.beginPath();
ctx.moveTo(((width/2)-(squareLength/2)), ((height/2)+(squareLength/2)));
ctx.lineTo(((width/2)-(squareLength/2)), ((height/2)-(squareLength/2)));
ctx.stroke();
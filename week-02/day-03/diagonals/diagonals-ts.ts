'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.
//Line 1
ctx.lineWidth = 3;
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(250, 100);
ctx.lineTo(350, 100);
ctx.stroke();

//Line 2
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(350, 100);
ctx.lineTo(350, 200);
ctx.stroke();

//Line 3
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(350, 200);
ctx.lineTo(250, 200);
ctx.stroke();

//Line 4
ctx.beginPath();
ctx.strokeStyle = "pink";
ctx.moveTo(250, 200);
ctx.lineTo(250, 100);
ctx.stroke();

//let's add yellow and orange diagonals
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.moveTo(250, 100);
ctx.lineTo(350, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.moveTo(250, 200);
ctx.lineTo(350, 100);
ctx.stroke();
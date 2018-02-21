'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

//The horizontal line length will be called "a" and the vertical "b"
let a: number;
let b: number;
//"x" and "y" will be the coordinates of the starting point
let x: number;
let y: number;


function drawRectangle (x: number, y: number, a: number, b: number) {
//Line 1
ctx.lineWidth = 1;
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo((x+a),y);
ctx.stroke();

//Line 2
ctx.beginPath();
ctx.moveTo((x+a),y);
ctx.lineTo((x+a),(y+b));
ctx.stroke();

//Line 3
ctx.beginPath();
ctx.moveTo((x+a),(y+b));
ctx.lineTo(x,(y+b));
ctx.stroke();

//Line 4
ctx.beginPath();
ctx.moveTo(x,(y+b));
ctx.lineTo(x,y);
ctx.stroke();
}

for (let i = 0; i < 4; i++){
    let c: number = (Math.random()*200);
    let d: number = (Math.random()*200);
    let z: number = (Math.random()*200);
    let w: number = (Math.random()*200);
    drawRectangle(z,w,c,d);
}

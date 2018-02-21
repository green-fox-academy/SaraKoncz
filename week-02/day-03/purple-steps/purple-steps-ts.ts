'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
 function drawSquare (x: number, y: number){
    ctx.fillStyle = '#9400D3';
    ctx.fillRect(x, y, 20, 20);
 }

let a: number = 0;
let b: number = 0;

for ( let i = 0; i < 19; i++) {
    a += 20;
    b += 20;
    drawSquare(a,b);
}
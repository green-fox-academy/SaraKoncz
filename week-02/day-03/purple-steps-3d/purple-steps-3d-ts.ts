'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
function drawSquare (x: number, y: number, z: number){
    ctx.fillStyle = '#9400D3';
    ctx.fillRect(x, y, z, z);
}

let a: number = 10;
let b: number = 10;
let c: number = 10;

for ( let i = 0; i < 6; i++) {
    drawSquare(a,b,c);
    a = a+(i+1)*10;
    b = b+(i+1)*10;
    c = c+10;    
}
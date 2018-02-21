'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.
function drawLine(x: number, y: number){
    ctx.lineWidth = 3;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}


let xcoordinates: number[] = [50, 250, 350];
let ycoordinates: number[] = [50, 150, 350];

let xlength: number = xcoordinates.length;

for (let i = 0; i < xlength; i++ ) {
    drawLine(xcoordinates[i],ycoordinates[i]);
}

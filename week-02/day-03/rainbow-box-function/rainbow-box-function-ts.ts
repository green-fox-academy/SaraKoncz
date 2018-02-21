'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
let width = canvas.width;
let height = canvas.height;

function drawCenterSquare(a: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect((width - a) / 2, (height - a) / 2, a, a);
}

//This for loop only fills the screen with centered random size and color squares:
// for (let i = 0; i <7; i++){
//     let b: number = (Math.random() * (298) + 1);
//     let col: string = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
//     drawCenterSquare(b, col);
// }

//This loop will fill create 7 squares, each bigger than the previous, with the colors of the rainbow
//"b" is the size of the smallest square
let b: number = 200;
let col: string;
//"rainbow" is an object that stores the color and color codes of the rainbow
let rainbow = {
    1: '#9400D3',
    2: '#4B0082',
    3: '#0000FF',
    4: '#00FF00',
    5: '#FFFF00',
    6: '#FF7F00',
    7: '#FF0000',
};

for (let i = 1; i <= 7; i++) {
    b -= 20;
    col = rainbow[i];
    drawCenterSquare(b, col);
}

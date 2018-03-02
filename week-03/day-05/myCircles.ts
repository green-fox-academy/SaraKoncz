'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let conv: number = Math.PI / 180;

let radius: number = 300;
let x: number = radius;
let y: number = radius;

function circles(x: number, y: number, radius: number) {
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'pink';
  ctx.beginPath();
  ctx.arc(x, y, radius, 0 * conv, 360 * conv);
  ctx.stroke();
  ctx.beginPath();
  ctx.stroke();
  ctx.beginPath();
  ctx.stroke();
  ctx.beginPath();
  ctx.stroke();
  if (radius > 10) {
    circles(x, y - radius / 2, radius / 2);
    circles(x + radius / 2 * Math.cos(Math.PI / 6), y + radius / 2 * Math.sin(Math.PI / 6), radius / 2);
    circles(x - radius / 2 * Math.cos(Math.PI / 6), y + radius / 2 * Math.sin(Math.PI / 6), radius / 2);
  }
}

circles(x, y, radius);




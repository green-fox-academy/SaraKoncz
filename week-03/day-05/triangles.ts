'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// m coefficient (to calculate the height of the triangle)
let m: number = Math.sqrt(3) / 2;
// I decided to make the length of the triangle's sides half of the canvas width
//let tl: number = canvas.scrollWidth;
//No we a drawing small triangles in it, starting from the left bottom. 
//let myLineNum: number = 10; //How many small triangles you want to start with?


function triangle(x: number, y: number, width: number, height: number) {
  let wiHalf: number = width / 2;
  let heiHalf: number = height / 2;
  let wiQuarter: number = width / 4;

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'pink';
  ctx.moveTo(x + 0 , y + 0);//     1
  
  ctx.lineTo(x + width, y + 0); //      2
  ctx.lineTo(x + wiHalf, y + height);//              3
  ctx.lineTo(x + 0, y + 0);//            4
  ctx.lineTo(x + wiHalf, y + 0);
  ctx.lineTo(x + width - wiQuarter, y + heiHalf);
  ctx.lineTo(x + wiQuarter, y + heiHalf);
  ctx.lineTo(x + wiHalf, y + 0);
  ctx.stroke();

  if(width < 20) {
  }else {
    triangle(x + 0, y + 0, wiHalf, heiHalf
);
    triangle(x + wiHalf, y + 0, wiHalf, heiHalf
);
    triangle(x + wiQuarter, y + heiHalf  , wiHalf, heiHalf
);
  }
}
let myWidth: number = 600;
triangle(0, 0, myWidth, myWidth*m);




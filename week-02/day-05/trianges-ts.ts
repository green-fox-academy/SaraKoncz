'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


// m coefficient (to calculate the height of the triangle)
let m: number = Math.sqrt(3) / 2;
// I decided to make the length of the triangle's sides half of the canvas width
let tl: number = canvas.scrollWidth;
//No we a drawing small triangles in it, starting from the left bottom. 
let myLineNum: number = 68; //How many small triangles you want to start with?

function drawTriangle(lineNum: number) {
    let stl: number = tl / lineNum;         //stl: small triangle length
    let a: number = 0;
    let b: number = a + stl;
    let c: number = stl / 2;
    let y: number = m * tl;
    let lineCount: number = lineNum;

    for (let j = 1; j <= lineNum; j++) {

        for (let i = 1; i <= lineCount; i++) {
            ctx.beginPath();
            ctx.moveTo(a, y);
            ctx.strokeStyle = 'pink';
            ctx.lineTo(b, y);
            ctx.lineTo(c, y - m * stl);
            ctx.lineTo(a, y);
            ctx.stroke();
            a += stl;
            c += stl;
            b += stl;
        }
        lineCount -= 1;
        a = ((stl / 2) * (lineNum - lineCount));
        b = ((stl / 2) * (lineNum - lineCount + 2));
        c = ((stl / 2) * (lineNum - lineCount + 1));
        y -= (m * stl);
    }
}

drawTriangle(myLineNum);


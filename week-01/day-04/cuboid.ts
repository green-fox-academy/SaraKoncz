'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
let a: number = 3;
let b: number = 4;
let c: number = 5;

let surface: number;
let volume: number;

surface = 2 * ((a*b)+(b*c)+(c*a));
volume = a * b * c;

console.log ('Surface: ', surface);
console.log ('Volume: ', volume);

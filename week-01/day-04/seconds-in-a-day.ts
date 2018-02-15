'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let secondsOfADay: number = 24 * 60 * 60;
let remainingSeconds: number = secondsOfADay - (currentHours * currentMinutes * currentSeconds);
console.log(remainingSeconds);

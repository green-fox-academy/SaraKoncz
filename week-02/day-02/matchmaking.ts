'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Bözsi', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Béla', 'Todd', 'Neef', 'Jeff'];

function makingMatches(a: string[], b: string[]){
    let matches: string[] = [];
for (let i = 0; i < a.length; i++){
    matches = matches.concat(a[i]);
    matches = matches.concat(b[i]);
}
return matches;
}
console.log(makingMatches(girls, boys));
console.log('Poor Jeff.');


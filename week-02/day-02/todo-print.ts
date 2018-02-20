'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let todoText: string = ' - Buy milk\n';
let myToDo: string = 'My todo:\n';
let downLoad: string = ' - Download milk\n'
let diablo: string = '      - Diablo';

todoText = myToDo.concat(todoText, downLoad, diablo);
console.log(todoText);
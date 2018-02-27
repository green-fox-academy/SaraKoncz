// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.

'use-strict';
const fs = require('fs');
//here I create the three files which contain the result ('win-o/x/draw.txt')
try {
  fs.writeFileSync('win-o.txt', 'O');
  fs.writeFileSync('win-x.txt', 'X');
  fs.writeFileSync('draw.txt', 'draw');
}
catch (e) {
  console.log('unable to write files');
}

function ticTacResult (fileName: string) {
  try {
  let result: string = fs.readFileSync(fileName, 'utf-8');
  return result;
  }
  catch (e) {
    return 'unable to read file';
  }
}

console.log(ticTacResult('win-o.txt'));

console.log(ticTacResult('win-x.txt'));

console.log(ticTacResult('draw.txt'));

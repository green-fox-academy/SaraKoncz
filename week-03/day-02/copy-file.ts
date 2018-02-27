// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use strict';
const fs = require('fs');

//here I create the first file which I want to copy ('myfile.txt')
try {
  fs.writeFileSync('myfile.txt', 'I want to copy this line');
}
catch (e) {
  console.log('unable to write first file: my-file.txt');
}

//here comes the copy function
function copyFile(fileName: string) {
  try {
    let copyMessage: string = fs.readFileSync(fileName, 'utf-8');
    fs.writeFileSync('myfile2.txt', copyMessage);
    return true;
  }
  catch (e) {
    return false;
  }
}

console.log(copyFile('myfile.txt'));
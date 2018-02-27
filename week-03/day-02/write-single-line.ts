// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'
'use strict';
const fs = require('fs');

let fileContent = 'Sara Koncz';

try {
fs.writeFileSync('../day-06/my-file.txt', fileContent);
let myFileContent = fs.readFileSync('my-file.txt', 'utf-8');
console.log(myFileContent);
}
catch (e) {
    console.log('unable to write file: my-file.txt');
}
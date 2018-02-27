// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

'use strict';
const fs = require('fs');

let myPath: string = 'C:/Users/user/Documents/learntocode/GreenFox/SaraKoncz/week-03/day-02/myfile/myfile.txt';
let myWord: string = 'eper';
let myNumber: number = 4;

function writeToFile(path: string, word: string, number: number) {
    try {
        let wordAll: string[] = [];
        for (let i = 0; i < number; i++) {
            wordAll.push('eper' + '\r\n');
        }
        fs.writeFileSync(path, wordAll.join(''));
        console.log(fs.readFileSync(path, 'utf-8'));
    }
    catch (e) {
        console.log('unable to write file: myfile.txt');        
    }
}
writeToFile(myPath, myWord, myNumber);
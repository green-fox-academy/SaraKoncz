// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

const fs = require('fs');

function printLines() {
    try {
        let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
        let length = 1;
        for (let i = 0; i < fileContent.length; ++i) {
            if (fileContent[i] == '\n') {
                length++;
            }
        }
        return console.log(length);
    }
    catch (e) {
        console.log('0');

    }
}
printLines();
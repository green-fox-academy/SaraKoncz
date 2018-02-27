// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

const fs = require('fs');

function printLines() {
    try {
        let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
        let lineLength = 1;
        let textLength = fileContent.length;
        if (textLength > 0) {
            for (let i = 0; i < textLength; ++i) {
                if (fileContent[i] == '\n') {
                    lineLength++;
                }
            }
        } else {
            length = 0;
        }
        return console.log(lineLength);
    }
    catch (e) {
        console.log('zero');

    }
}
printLines();
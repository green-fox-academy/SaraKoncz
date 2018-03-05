// Create a function that takes a filename as string parameter,
// counts the occurances of the letter "a", and returns it as a number.
// If the file does not exist, the function should return 0 and not break.

// example: on the input "afile.txt" the function should return 28 - print this result
// example: on the input "not-a-file" the function should return 0 - print this result
'use-strict';
const fs = require('fs');

function countA(fileName: string) {
  try {
    let fileContent = fs.readFileSync(fileName, 'utf-8');
    let numberOfA: number = 0;
    for (let i: number = 0; i < fileContent.length; i++) {
      if (fileContent.charAt(i) === 'a' || fileContent.charAt(i) === 'A') {
        numberOfA++;
      }
    }
    return (numberOfA);
  }
  catch (e) {
    console.log('0');
  }
}

console.log(countA('C:/Users/user/Documents/learntocode/GreenFox/SaraKoncz/week-04/day-01/exam-trial-basics-master/exam-trial-basics-master/countas/afile.txt'));

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
'use-strict';
const fs = require('fs');

//fist we check how many lines the log.txt has:
function countLines(fileName: string) {
  try {
    let fileContent = fs.readFileSync(fileName, 'utf-8');
    let lineNumber = 1;
    let textLength = fileContent.length;
    if (textLength > 0) {
      for (let i = 0; i < textLength; ++i) {
        if (fileContent[i] == '\n') {
          lineNumber++;
        }
      }
    } else {
      lineNumber = 0;
    }
    return (lineNumber);
  }
  catch (e) {
    console.log('zero');
  }
}

let lineLength: number = (countLines('log.txt'));

function createIPArray(fileName: string) {
  //no we create a string[] where each variable is each line
  let stringOfLog: string = fs.readFileSync(fileName, 'utf-8');
  let arrayOfLog: string[] = stringOfLog.split('/\r\n');
  //console.log(arrayOfLog);

  //now we check by looking at the first line of the array thata from which index till which one the IP adress is in the line
  //console.log(arrayOfLog[0]);
  let startIP: number = arrayOfLog[0].indexOf('3');
  let endIP: number = arrayOfLog[0].indexOf('45');
  endIP = endIP + 2;
  //console.log(startIP);
  //console.log(endIP);

  //now we create the string[] with the IP adresses
  let arrayIP: string[] = [];
  for (let i = 0; i < lineLength; i++) {
    arrayIP[i] = arrayOfLog[i].substring(startIP, endIP);
  }
  return arrayIP;
}
console.log(createIPArray('log.txt'));

//now let's check the GET/POST ratio
function getPostRatio(fileName: string, lineLength: number) {
  let stringOfLog: string = fs.readFileSync(fileName, 'utf-8');
  let arrayOfLog: string[] = stringOfLog.split('/\r\n');
  let gets: number = 0;
  for (let i = 0; i < lineLength; ++i) {
    if (arrayOfLog[i].indexOf('GET') >= 0) {
      gets++;
    }
  }
  //console.log(gets);

  let posts: number = 0;
  posts = lineLength - gets;
  //console.log(posts);
  return (gets / posts);
}

console.log(getPostRatio('log.txt', lineLength));




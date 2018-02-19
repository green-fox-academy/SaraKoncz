// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

'use strict';
// here I created the basic function:
let naMe: string = 'Greenfox';
function greet(naMe: string): string {
    let newName = 'Hello ' + naMe;
    return newName;
}
console.log(greet(naMe));

// here I made a knew one which can handle also when no parameter is given
let naMe2: string = 'Sara';
function greet2(naMe1?: string): string {
    if (naMe1 !== '') {
    let newName2 = 'Hello ' + naMe1;
    return newName2;
    } else {
        return 'Hello';
    }
    
}
console.log(greet2(naMe2));

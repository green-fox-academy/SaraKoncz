// -  Create a function called `printer`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

'use strict';

function printer(print1?, print2?: string){
    if (print1 !== undefined) {
        if (print2 !== undefined){
            console.log(print1, print2);
        }
        else {
            console.log(print1);
        }
        } else {
        if (print2 !== undefined){
            console.log(print2);
        }else {
            console.log('Please insert values!');
        }
    }
}

let a: string= 'cica';
let b: string;

printer(a,b);
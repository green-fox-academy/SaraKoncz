// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';
let c: number = 0;

function divideTen (a: number) {
    if (a === 0) {
        return 'fail';
    } else {
    let b: number;
    b = 10 / a;
    return b;
    }
}
 console.log (divideTen(c));

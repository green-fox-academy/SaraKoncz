'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let firsthalf: string = quote.substr(0,21);
let secondhalf: string = quote.substr(20);
let missing: string = 'always takes longer than';
quote = firsthalf.concat(missing, secondhalf);
console.log(quote);
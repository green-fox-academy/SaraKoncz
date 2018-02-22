'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
// Expected output: "What I cannot create I do not understand."

let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
function quoteSwap(mixed: string[]){
    let order: string;
    order = mixed[0]+ ' '+mixed[1]+' '+ mixed[5]+' '+ mixed[3]+' '+ mixed[4]+ ' '+ mixed[2]+' '+ mixed[6]+' '+mixed[7];
    return order;
}
console.log(quoteSwap(words));
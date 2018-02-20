'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
function reverse(s: string){
    let reversed2: string = '';
for (let i = reversed.length; i >= 0; i--){
    reversed2 += reversed.charAt(i);
}
return reversed2;
}
console.log(reverse(reversed));

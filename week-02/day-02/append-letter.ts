'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(input: string[]) { 
 let b: number = input.length;
for (let i = 0; i < b; i++){
    input[i] += 'a';
}
return input;
}
console.log(appendA(far));

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'


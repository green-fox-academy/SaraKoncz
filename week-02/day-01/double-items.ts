// -  Create an array variable named `names` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// -  Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

'use strict';
let naMes: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
naMes = naMes.map (function(double){
    return double+double;
})

console.log(naMes);
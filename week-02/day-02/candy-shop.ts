'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

//Sári egyszerű megoldása:
function list(item: any){
    item[1] = 'Croissant';
    item[3] = 'Ice Cream'; 
    return item;
}
console.log(list(shopItems));

//Gergő fancy megoldása:
function sweets(arr: any[]){
    arr.map(function(value, index){
        if(typeof arr[index] === 'number'){
            arr[index] = 'Croissant';
            return arr;
        }else if(typeof arr[index] === 'boolean'){
            arr[index] = 'Ice cream';
            return arr; 
        }
        return arr;
    });
    return arr;
}

console.log(sweets(shopItems));
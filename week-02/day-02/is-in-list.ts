'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 12, 14, 16];
let isItThere: number[] = [4, 8, 12, 16];

//version 0: the ultimate solution
let a: number = 0; //it will tell us how many numbers are in the list from the ones that we are looking for

function checkNums(num: number[], list: number[]) {
    for (let i = 0; i < num.length; i++) {
        let b: number = 0; //b just there to tell us if each is there or not--> if -1: false, else: true
        b += num.indexOf(list[i]);
        if (b >= 0) {
            a++;
        }
    }
    if (a === list.length) {
        return 'true';
    } else {
        return 'false';
    }
}
console.log(checkNums(listOfNumbers, isItThere));

//version 1: works perfectly but long and does not  work if we change the length of the array of the tested numbers

// function checkNums(num: number[], list: number[]) {
//     let four: boolean = false;
//     let eight: boolean = false;
//     let twelve: boolean = false;
//     let sixteen: boolean = false;
//     for (let i = 0; i < num.length; i++) {
//         for (let j = 0; j < list.length; j++) {
//             if (num[i] === list[j]) {
//                 if (num[i] === 4) {
//                     four = true;
//                 }
//                 if (num[i] === 8) {
//                     eight = true;
//                 }
//                 if (num[i] === 12) {
//                     twelve = true;
//                 }
//                 if (num[i] === 16) {
//                     sixteen = true;
//                 }
//             }
//         }
//     }
//     if (four === true && eight === true && twelve === true && sixteen === true) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }


//Version 2: pretty short, the lengths of both arrays can be changed, but if it contains for example 4, 4, 8, 12 it also returns true
// function checkNums(num: number[], list: number[]) {
//     //let contain: boolean = false;
//     let db: number = 0;
//     for (let i = 0; i < num.length; i++) {
//         for (let j = 0; j < list.length; j++) {
//             if (num[i] === list[j]) {
//                 for (let k = 0; k < list.length; k++) {
//                     if (num[i] === list[k]) {
//                         db++;
//                     }
//                 }

//             }
//         }
//     }
//     if (db === list.length) {
//         return 'true';
//     } else {
//         return 'false';
//     }
// }




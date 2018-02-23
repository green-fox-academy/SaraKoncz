'use strict';

let students: any[] = [
    { name: 'Rezso', age: 9.5, candies: 2 },
    { name: 'Zsombor', age: 12, candies: 5 },
    { name: 'Aurel', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'Gerzson', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function candyMillionare(myObj: any[]) {
    let list: string[];
    for (let i = 0; i < myObj.length; i++) {
        if (myObj[i].candies > 4) {
            list.push(myObj[i]);
        }
    }
    return list;
}

console.log(candyMillionare(students));
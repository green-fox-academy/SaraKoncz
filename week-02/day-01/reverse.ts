// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

'use strict';
let numList: number[] = [3, 4, 5, 6, 7];
console.log(numList);
let revList: number[] = [];

//with for loop + new array
for (let i = 0; i < numList.length; i++) {
  revList[i] = numList[numList.length - 1 - i];
}
console.log(revList);

//with for loop + built in method without creating an array
for (let i = 0; i < numList.length; i++) {
  let removed = numList.splice(numList.length-i-1, 1);   
  numList = numList.concat(removed);
}
console.log(numList);

//with built in method without a lop
let numList2: number[] = [3, 4, 5, 6, 7];
numList2 = numList2.reverse();
console.log(numList2);


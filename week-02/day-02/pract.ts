let myString = 'almafa';
console.log(myString[1]);

var myNewString = myString
  .replace('a', 'x')
  .replace('a', 'x')
  .replace('a', 'x');

console.log(myString);
console.log(myNewString);

//almafa
myString = 'almafa';
console.log(myString.split('a'));

//almafa
myString = 'almafa';
console.log(myString.slice(2, 3));
console.log(myString);

//almafa
myString = 'almafa';
console.log(myString.substr(2, 3));
console.log(myString);

//almafa
myString = 'almafa';
console.log(myString.charAt(2));
console.log(myString);

//almafa
myString = 'alma';
let myString2 = 'fa';
let myString3 = 'virág';
console.log(myString.concat(myString2, myString3));
console.log(myString);


let myArray = [1,2,3,4,5,6,7];

console.log(myArray.map(function (item: number): number {
  return item * 2;
}));

myArray.forEach(function(item) {
  console.log(item)
});


console.log(
  myArray
    .filter(function(item) {
      return item % 2 === 0;
    })
    .map(function (item: number): number {
      return item * 2;
    })
);

console.log(
  myArray
    .filter(item => item % 2 === 0)
    .map(item => item * 2)
);

let myObj = {
  a: 12,
  b: [1,2],
  c: function() {
    console.log('hello world');
  },
  d: true,
  e: 'this is a string'
};

console.log(Object.keys(myObj));

Object.keys(myObj)
.forEach(function(propertyName) {
  console.log(myObj[propertyName])
});

console.log(myObj.hasOwnProperty('a'));  //true
console.log(myObj.hasOwnProperty('almafa'));  //false

let points = {
  janika: {
    red: 12,
    black: 14
  },
  belus: 13
};
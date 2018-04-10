function multiplier(multiplyBy) {
  return function duplicator(number) {
    return number * multiplyBy;
  }
}

const duplicator = multiplier(2);

console.log(duplicator(5)); // should log 10
console.log(duplicator(10)); // should log 20

const threeTimes = multiplier(3);

console.log(threeTimes(5)); // should log 15
console.log(threeTimes(100)); // should log 300

//solution with bind and this:
function multiply(a, b) {
  return a * b;
}

const multyplyByTwo = multiply.bind(this, 2);
console.log(multyplyByTwo(4));

const multyplyByThree = multiply.bind(this, 3);
console.log(multyplyByThree(4));

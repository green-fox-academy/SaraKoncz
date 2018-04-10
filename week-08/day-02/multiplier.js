// Create the multiplier function that you can use like this:
// function alcatraz() {
//   let prisoners = ['Clarence Anglin', 'John Anglin', 'Frank Morris'];
//   return function() {
//       return prisoners;
//   }
// }

// let fugitives = alcatraz();

// console.log(prisoners); // ReferenceError: prisoners is not defined
// console.log(alcatraz.prisoners); // undefined
// console.log(fugitives()); // Clarence Anglin, John Anglin, Frank Morris

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

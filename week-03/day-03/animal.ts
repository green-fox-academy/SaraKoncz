// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one
'use strict';
class Animal {
  hunger: number = 50;
  thirst: number = 50;
  eat (): number {
    return this.hunger--;
  }
  drink (): number {
    return this.thirst--;
  }
  play (): number {
    return ((this.hunger++),(this.thirst++));
  }
}

let cica: Animal = new Animal;
console.log(cica);
cica.eat;

console.log(cica);
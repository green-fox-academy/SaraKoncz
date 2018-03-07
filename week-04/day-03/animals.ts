'use strict'
abstract class Animal {
  name: string;
  age: number;
  food: string;
  hunger: number;
  tired: number;

  constructor(name: string, age: number, food: string, hunger: number, tired: number) {
    this.name = name;
    this.age = age;
    this.food = food;
    this.hunger = hunger;
    this.tired = tired;
  }
  getName() {
    return this.name;
  }
  breed() { }
  eat(): string {
    return this.food;
  }
  sleep() {
    this.tired++;
  }
  hungry(): string {
    let hungriness: string;
    if (this.hunger > 0) {
      hungriness = 'not'
    }
    if (this.hunger >= 3) {
      hungriness = 'a bit'
    }
    if (this.hunger >= 6) {
      hungriness = 'very'
    }
    return hungriness
  }
}

class Reptile extends Animal {
  constructor(name: string, age: number, food: string, hunger: number, tired: number) {
    super(name, age, food, hunger, tired);
  }
  breed(): string {
    return 'egg';
  }
}

class Mammal extends Animal {
  constructor(name: string, age: number, food: string, hunger: number, tired: number) {
    super(name, age, food, hunger, tired);
  }
  breed(): string {
    return 'cute babies';
  }

}

class Bird extends Animal {
  constructor(name: string, age: number, food: string, hunger: number, tired: number) {
    super(name, age, food, hunger, tired);
  }
  breed(): string {
    return 'egg';
  }
}

let reptile = new Reptile("Crocodile", 3, 'chicken', 10, 2);
let mammal = new Mammal("Koala", 2, 'eucaliptus', 2, 10);
let bird = new Bird("Parrot", 0.5, 'seeds', 5, 3);

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());
console.log("What do you eat?");
console.log("A " + reptile.getName() + " is eating " + reptile.eat());
console.log("A " + mammal.getName() + " is eating " + mammal.eat());
console.log("A " + bird.getName() + " is eating " + bird.eat());
console.log("How hungry you are?");
console.log(reptile.getName() + " is " + reptile.hungry() + " hungry.");
console.log(mammal.getName() + " is " + mammal.hungry() + " hungry.");
console.log(bird.getName() + " is " + bird.hungry() + " hungry.");

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
  eat () {
    this.hunger--;
  }
  drink () {
    this.thirst--;
  }
  play () {
    this.hunger++;
    this.thirst++;
  }
}

let cica: Animal = new Animal;
console.log(cica);
cica.eat;

console.log(cica);

class Animal {
  private hunger: number;
  private thurst: number;

  constructor(hunger?: number, thurst?: number) {
      this.hunger = Math.floor(hunger) || 50;
      this.thurst = Math.floor(thurst) || 50;
  }
  eat () {
    this.hunger--;
  }
  drink(){ 
    this.thurst--;
  }
  play() {
    this.hunger++;
    this.thurst++;
  }
  get hung() {
    return this.hunger;
  }
  get thur() {
    return this.thurst;
  }
}

let cat = new Animal(50, 30.4);

  cat.drink();
  console.log(cat.thur);
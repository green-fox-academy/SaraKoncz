'use strict';
import {Bird} from "./animals";
/*Create a Flyable interface
it should have land, fly and takeOff methods (TakeOff in C#)
Create an abstract Vehicle class
it should have at least 3 fields
Extend Helicopter class from Vehicle
implement your Flyable interface
Extend Bird from your abstract Animal class (zoo exercise)
implement yourˇFlyable interface*/
interface Flyable {
  land();
  fly();
  takeOff();
}

abstract class Vehicle {
  type: string;
  size: string;
  age: number;
  constructor(type: string, size: string, age: number) {
    this.type = type;
    this.size = size;
    this.age = age;
  }
getType(): string{
return this.type;
}
}

class Helicopter extends Vehicle implements Flyable {
  land(): string {
    return 'I land with a big noise.'
  }
  fly(): string {
    return 'I can fly for 10 hours.'
  }
  takeOff(): string {
    return 'I can takeOff from anywhere.'
  }
}
let bird = new Bird("Parrot", 0.5, 'seeds', 5, 3);

let helloCopter = new Helicopter('helicopter', 'big', 2);

console.log(`I am a ${helloCopter.getType()}.`);
console.log(helloCopter.land());
console.log(helloCopter.fly());
console.log(helloCopter.takeOff());
console.log('--------------');
console.log(`I am a ${bird.getName()}.`);
console.log(bird.land());
console.log(bird.fly());
console.log(bird.takeOff());

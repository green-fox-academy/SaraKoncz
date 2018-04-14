function Animal() {
  this.hunger = 5;
  this.thirst = 5;
  this.eat = function () {
    this.hunger -= 1;
  };
  this.drink = function () {
    this.thirst -= 1;
  };
  this.play = function () {
    this.hunger += 1;
    this.thirst += 1;
  };
}

// The farm has slots which defines the number of free places for animals
// The farm has list of Animals
// The farm can breed() which creates a new animal if there's place for it
// The farm can adopt() which removes the least hungry animal
// The farm can print reports about their current state:
// The farm has 11 living animals we are bankrupt
// The farm can progress from day to a new day by calling it's progress() method:
// All animals should have their methods called randomly with 50% chance
// The farm should call its breed and adopt method at the end of each day
// The farm should print report at the end of each day
// Print the number of sheeps
// Print "bankrupt" if no animals left
// Print "okay" if the number of animals is above zero and under the slot number
// Print "full" if the number of animals are at the maximum allowed

function Farm(slots) {
  this.slots = slots;
  this.animals = [];
  this.status = '';

  for (let i = 0; i < slots; i++) {
    this.animals.push(new Animal());
  };

  this.breed = function () {
    if (this.slots > this.animals.length) {
      this.animals.push(new Animal());
      this.slots -= 1;
    }
  };
  this.adopt = function () {
    let sheepIndexToAdopt = 0;
    this.animals.forEach((e, i) => {
      if (e.hunger > sheepIndexToAdopt) {
        sheepIndexToAdopt = i;
      }
    });
    this.animals.splice(sheepIndexToAdopt, 1);
    this.slots++;
  };
  this.print = function () {
    if (this.animals.length === 0) {
      this.status = 'bankrupt';
    } else {
      if (this.animals.length === this.slots) {
        this.status = 'full';
        console.log('slots:' + this.slots)
      } else {
        this.status = 'okay';
        console.log('slots:' + this.slots)
      }
    }
    return `The farm has ${this.animals.length} animals, we are ${this.status}`
  };
  this.progress = function () {

  };
}

const SheepFarm = new Farm(20);

//console.log(SheepFarm.animals); // Should log 20 Animal objects
//const button = document.querySelector('button');
console.log(SheepFarm.print());
SheepFarm.adopt();
console.log(SheepFarm.print());
SheepFarm.breed();
console.log(SheepFarm.print());
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
SheepFarm.adopt();
console.log(SheepFarm.print());
/*
let signUpButton = document.querySelector('#signUpButton');
signUpButton.addEventListener('click', () => {
  document.querySelector("#currentState").innerHTML = 'kacsa';
});        */
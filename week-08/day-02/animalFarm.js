let animal = {
  hunger: 0,
  thirst: 0,
  inkAmount: 0,
  create: function () {
    this.hunger = 5;
    this.thirst = 5;
    return animal;
  },
  eat: function () {
    this.hunger -= 1;
  }, 
  drink: function () {
    this.thirst -= 1;
  },
  play: function () {
    this.hunger += 1;
    this.thirst += 1;
  } 
}

function animalConstructor() {
  let newAnimal = animal.create();
  return newAnimal;
}

// The farm has slots which defines the number of free places for animals
// The farm has list of Animals
// The farm can breed() which creates a new animal if there's place for it
// The farm can slaughter() which removes the least hungry animal
// The farm can print reports about their current state:
// The farm has 11 living animals we are bankrupt
// The farm can progress from day to a new day by calling it's progress() method:
// All animals should have their methods called randomly with 50% chance
// The farm should call its breed and slaughter method at the end of each day
// The farm should print report at the end of each day
// Print the number of sheeps
// Print "bankrupt" if no animals left
// Print "okay" if the number of animals is above zero and under the slot number
// Print "full" if the number of animals are at the maximum allowed

let farm = {
  slots: 0,
  listOfAnimals: [],
  status: '',
  create: function(slots){
    this.slots = slots;
    for (let i = 0; i < slots; i++ ){
      this.listOfAnimals.push(animalConstructor());
      console.log(this.listOfAnimals);
    }
    return farm;
  },
  breed: function() {
    if (this.slots >= 1){
      this.listOfAnimals.push(animalConstructor());
    }
  },
  slaughter: function() {
    let sheepIndexToSlaughter = 0;
    this.listOfAnimals.forEach((e, i) => {
      if (e.hunger > sheepIndexToSlaughter){
        sheepIndexToSlaughter = i;
      }
    });
    this.listOfAnimals = this.listOfAnimals.splice(sheepIndexToSlaughter, 1);
  },
  print: function() {
    if (this.listOfAnimals.length === 0){
      this.status = 'bankrupt';
    } else if (this.listOfAnimals.length === this.slots){
      this.status = 'full';
    } else {
      this.status = 'okay';
    }
    return `The farm has ${this.listOfAnimals.length} animals, we are ${this.status}`
  },
  progress: function(){

  }
}

const sheepFarm = farm.create(20);
console.log(sheepFarm.print());

sheepFarm.slaughter();
sheepFarm.listOfAnimals.forEach (e => {
  console.log(e);
});
console.log(sheepFarm.print());
sheepFarm.breed();
console.log(sheepFarm.listOfAnimals);
console.log(sheepFarm.print());
sheepFarm.slaughter();
console.log(sheepFarm.print());
sheepFarm.breed();
sheepFarm.breed();
sheepFarm.breed();
sheepFarm.breed();
sheepFarm.breed();
sheepFarm.breed();
sheepFarm.breed();
console.log(sheepFarm.print());
sheepFarm.slaughter();
sheepFarm.slaughter();
sheepFarm.slaughter();
sheepFarm.slaughter();
console.log(sheepFarm.print());





/*
let signUpButton = document.querySelector('#signUpButton');
signUpButton.addEventListener('click', () => {
  document.querySelector("#currentState").innerHTML = 'kacsa';
});        */
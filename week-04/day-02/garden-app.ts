'use strict';
class Plants {
  name: string;
  waterLevel: number;
  lackWater: number;
  waterMe: boolean = false;
  absorbtion: number;

  constructor(name: string, waterLevel: number, lackWater: number, absorbtion: number) {
    this.name = name;
    this.waterLevel = waterLevel;
    this.lackWater = lackWater;
  }
}

class Flower extends Plants {
  constructor(name: string = 'black', waterLevel: number = 0, lackWater: number = 5, absorbtion: number = 0.75) {
    super(name, waterLevel, lackWater, absorbtion);
  }
}

class Tree extends Plants {
  constructor(name: string = 'white', waterLevel: number = 0, lackWater: number = 10, absorbtion: number = 0.4) {
    super(name, waterLevel, lackWater, absorbtion);
  }
}

class Garden {
  name: string;
  plants: any[];

  constructor(name: string, plants: any[] = []) {
    this.name = name;
    this.plants = plants;
  }

  addPlants(Plants) {
    this.plants.push(Plants);
  }

  needsWater() {
    for (let i: number = 0; i < garden.plants.length; i++) {
      if (garden.plants[i].waterLevel < garden.plants[i].lackWater) {
        garden.plants[i].waterMe = true;
        console.log(`The ${garden.plants[i].name} needs water.`);
      } else {
        console.log(`The ${garden.plants[i].name} doesn\'t need water.`);
      }
    }
  }

  waterPlants(water: number) {
    let thirstyplants: number = 0; //first we check how many plants we should water:
    for (let i: number = 0; i < garden.plants.length; i++) {
      if (garden.plants[i].waterMe === true) {
        thirstyplants++;
      }
    }
    let waterForThirsties: number = water / thirstyplants; //now we divide the water between the thirsty ones
    for (let i: number = 0; i < garden.plants.length; i++) {
      if (garden.plants[i].waterMe === true) {
        garden.plants[i].waterLevel += waterForThirsties * garden.plants[i].absorbtion;
      }
    }
  }
}
let garden = new Garden('garden');

let rose = new Flower('rose', 0);
let daisy = new Flower('daisy', 0);
let tulip = new Flower('tulip', 10);
garden.addPlants(rose);
garden.addPlants(daisy);
garden.addPlants(tulip);

let chestnut = new Tree('chestnut', 0);
let appletree = new Tree('appletree', 0);
let pinetree = new Tree('pinetree', 10);
garden.addPlants(chestnut);
garden.addPlants(appletree);
garden.addPlants(pinetree);

//now we show the status of the plants:
garden.needsWater();
console.log('--------------');
garden.waterPlants(40);
garden.needsWater();
console.log('--------------');
garden.waterPlants(70);
garden.needsWater();
console.log('--------------');

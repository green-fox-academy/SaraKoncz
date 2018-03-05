// Write a function that takes any list that contains pirates as in the example,
// And returns a list of names containing the pirates that
// - have wooden leg and
// - have more than 15 gold
'use strict';

class Pirate {
  name: string;
  hasWoodenLeg: boolean;
  gold: number;

  constructor(name: string, hasWoodenLeg: boolean, gold: number) {
    this.name = name;
    this.hasWoodenLeg = hasWoodenLeg;
    this.gold = gold;
  }
  get pirateName(): string {
    return this.name;
  }
  get pirateLeg(): boolean {
    return this.hasWoodenLeg;
  }
  get pirateGold(): number {
    return this.gold;
  }
}

// Given this list...
function initializePirates(): Pirate[] {
  let pirates = [];
  pirates.push(new Pirate("Olaf", false, 12));
  pirates.push(new Pirate("Uwe", true, 9));
  pirates.push(new Pirate("Jack", true, 16));
  pirates.push(new Pirate("Morgan", false, 17));
  pirates.push(new Pirate("Hook", true, 20));
  return pirates;
}

let pirates = initializePirates();

function pirateLegsandGold(listOfPirates): string[] {
  let woodandgold: string[] = [];
  for (let i: number = 0; i < listOfPirates.length; i++) {
    if (listOfPirates[i].pirateGold > 15 && listOfPirates[i].pirateLeg === true) {
      woodandgold = woodandgold.concat(listOfPirates[i].pirateName);
    }
  }
  return woodandgold;
}

console.log(pirateLegsandGold(pirates));

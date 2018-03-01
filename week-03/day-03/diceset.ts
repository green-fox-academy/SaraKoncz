'use strict';
class DiceSet {
  /**    You have a Dice class which has 6 dice */
  /**   You can roll all of them with roll() */
  /**   Check the current rolled numbers with getCurrent() */
  /**   You can reroll with reroll() */
  /**   Your task is to get where all dice is a 6 */
  dices: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dices = [];
    for (var i = 0; i < this.numOfDices; i++) {
      this.dices.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dices;
  }

  reroll(index?: number) {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        this.dices[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dices[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index?: number) {
    if (index == undefined) {
      for (var i = 0; i < this.numOfDices; i++) {
        console.log(this.dices[i]);
      }
    } else {
      console.log(this.dices[index]);
    }
  }
}

let myDice = new DiceSet();
myDice.roll();
myDice.getCurrent();

//my Code starts here:

function sumTheDice(collectorF, numLengthF) {
  let sumofDice: number = 0;
  for (let i = 0; i < numLengthF; i++) {
    sumofDice += collectorF[i];
  }
  return sumofDice;
}

let a: number = 0;

do {
  let numLength: number = myDice.numOfDices;
  let collector: number[] = myDice.dices;
  myDice.reroll();
  myDice.getCurrent();
  
  a = sumTheDice(collector, numLength);

} while (a !== 36)


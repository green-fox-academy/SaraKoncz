'use strict';
import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
let dominoesOrg = [];
//let length: number = dominoes.length;

function orderOfDominos(dominoesOrgF, dominoesF) {
  dominoesOrgF[0] = dominoesF[0];
  for (let i = 0; i < dominoesF.length - 1; i++) {
    let dominoEnd = (dominoesOrgF[i].values[1]);

    for (let j = 0; j < dominoesF.length - 1; j++) {
      let nextDominoStart = (dominoesF[j + 1].values[0]);

      if (dominoEnd == nextDominoStart) {
        dominoesOrgF.push(dominoesF[j + 1]);
      }

    }
  }
}

orderOfDominos(dominoesOrg, dominoes);
print(dominoesOrg);
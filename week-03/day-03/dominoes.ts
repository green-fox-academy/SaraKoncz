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
let length: number = dominoes.length;
function orderOfDominos(dominoesOrg, dominoes, length) {
  dominoesOrg[0] = dominoes[0];
  for (let i = 0; i < length - 1; i++) {
    let dominoEnd = (dominoesOrg[i].values[1]);
    
    for (let j = 0; j < length - 1; j++) {
      let nextDominoStart = (dominoes[j + 1].values[0]);
      
      if (dominoEnd == nextDominoStart) {
        dominoesOrg.push(dominoes[j+1]);
      }

    }
  }
}

orderOfDominos(dominoesOrg, dominoes, length);
print(dominoesOrg);
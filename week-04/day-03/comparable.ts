'use strict';
import { Domino } from "./domino";


let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

console.log(dominoes.sort(function (a: Domino, b: Domino): number {
  return a.compareTo(b)
}));

//this code is only finished till it sorts the dominos and gives back: [ Domino { values: [ 1, 5 ] }, Domino { values: [ 2, 4 ] }, Domino { values: [ 4, 6 ] }, Domino { values: [ 5, 2 ] }, Domino { values: [ 6, 7 ] }, Domino { values: [ 7, 1 ] } ]

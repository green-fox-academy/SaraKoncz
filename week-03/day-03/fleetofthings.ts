// In the Main method create a fleet
// Achieve this output:s
//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */
'use strict';
import { Thing } from "./things";
import { Fleet } from "./fleet";

let things1: Thing = new Thing('Get milk');
let things2: Thing = new Thing('Remove the obstacles');
let things3: Thing = new Thing('Stand up');
let things4: Thing = new Thing('Eat lunch');

let fleet = new Fleet();

fleet.add(things1);
fleet.add(things2);
fleet.add(things3);
fleet.add(things4);

things3.complete();
things4.complete();

fleet.print();
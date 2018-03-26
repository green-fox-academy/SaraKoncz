'use strict';
class Aircraft {
  type: string;
  amno: number = 0;
  maxAmno: number;
  baseDamage: number;
  allDamage: number = 0;

  constructor(type: string, maxAmno: number, baseDamage: number) {
    this.type = type;
    this.maxAmno = maxAmno;
    this.baseDamage = baseDamage;
  }

  fight(): number {
    this.allDamage = this.amno * this.baseDamage;
    this.amno = 0;
    return this.allDamage;
  }

  refill(fuel: number): number {
    let remainedFuel: number = 0;
    if (fuel >= this.maxAmno - this.amno) {
      remainedFuel = fuel - (this.maxAmno - this.amno);
      this.amno = this.maxAmno;
    } else if (fuel < this.maxAmno - this.amno) {
      this.amno += fuel;
    }
    return remainedFuel;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    return `${this.type}, Amno: ${this.amno}, Base Damage: ${this.baseDamage}, All Damage: ${this.allDamage}`
  }

}

class Carrier {
  name: string;
  aircrafts: any[] = [];
  amnoStore: number;
  healthPoint: number;
  aircraftCounter: number = 0;
  totalDamage: number = 0;

  constructor(name: string, amnoStore: number, healthPoint: number = 4000) {
    this.name = name;
    this.amnoStore = amnoStore;
  }

  addAircraft(Aircraft) {
    this.aircrafts.push(Aircraft);
    this.aircraftCounter++;
  }

  fill() {
    if (this.amnoStore >0) {
      for (let i: number = 0; i < this.aircrafts.length; i++) {
        if (this.aircrafts[i].type === 'F35'){
        this.amnoStore -= this.aircrafts[i].maxAmno - this.aircrafts[i].amno;
        if (this.amnoStore < 0) {return}
        this.aircrafts[i].amno += this.aircrafts[i].maxAmno - this.aircrafts[i].amno;
        console.log(this.amnoStore);
        }
      }
      for (let i: number = 0; i < this.aircrafts.length; i++) {
        if (this.aircrafts[i].type === 'F16'){
        this.amnoStore -= this.aircrafts[i].maxAmno - this.aircrafts[i].amno;
        if (this.amnoStore < 0) {return}
        this.aircrafts[i].amno += this.aircrafts[i].maxAmno - this.aircrafts[i].amno;
        console.log(this.amnoStore);
        }
      }
      return;
    } if (this.amnoStore === 0) {
      return console.log('Error: amnoStore empty')
    }
  }
}

let no1 = new Aircraft('F16', 8, 30);
let no2 = new Aircraft('F16', 8, 30);
let no3 = new Aircraft('F16', 8, 30);
let no4 = new Aircraft('F35', 12, 50);
let no5 = new Aircraft('F35', 12, 50);
let no6 = new Aircraft('F35', 12, 50);
//console.log(f16.refill(6));
console.log(no1.getStatus());
let myCarrier = new Carrier('myCarrier', 24);
myCarrier.addAircraft(no1);
myCarrier.addAircraft(no2);
myCarrier.addAircraft(no3);
myCarrier.addAircraft(no4);
myCarrier.addAircraft(no5);
myCarrier.addAircraft(no6);
myCarrier.fill();
console.log((myCarrier.aircrafts[0]));
console.log((myCarrier.aircrafts[1]));
console.log((myCarrier.aircrafts[2]));
console.log((myCarrier.aircrafts[3]));
console.log((myCarrier.aircrafts[4]));
console.log((myCarrier.aircrafts[5]));

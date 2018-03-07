'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  listOfDOW: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  codeBase: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  dowBooking: string;
  codeBooking: string = '';
  getDowBooking(): string {
    this.dowBooking = this.listOfDOW[(Math.floor(Math.random() * this.listOfDOW.length))];
    return this.dowBooking
  }
  getCodeBooking(): string {
    for (let i: number = 0; i < 8; i++) {
      this.codeBooking += this.codeBase.charAt(Math.floor(Math.random() * this.codeBase.length));
    }
    return this.codeBooking
  }
  printBooking(): any {
    return console.log(`Booking# ${this.codeBooking} for ${this.dowBooking}`);
  }
}
let myBooking = new Reservation();

myBooking.getDowBooking();
myBooking.getCodeBooking();
myBooking.printBooking();

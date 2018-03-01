'use strict';
class BankAccount {
  public bankName: string;
  private pinCode: number;
  private money: number;
  static counter: number = 0;
  constructor(bankName, pinCode) {
    BankAccount.counter++;
    this.bankName = bankName;
    this.pinCode = pinCode;
    console.log(BankAccount.counter);
  }
  set setPinCode(pinNumber) {
    this.pinCode = pinNumber;
  }
  get getPinCode() {
    return this.pinCode;
  }
  set setMoney(cash) {
    this.money = cash;
  }
  get getMoney() {
    return this.money;
  }
  printData() {
    console.log(this.money, this.pinCode);
  }
  pinCodeCheck(pinCode, money) {
    if(this.pinCode === pinCode) {
      return this.money += money;
    } else {
        console.log('Nice try boooy');
      }

  }
}
let bA = new BankAccount('OTP BANK',1234);
console.log(bA.bankName);
bA.setPinCode = 1234;
console.log(bA.getPinCode);
bA.setMoney = 1000;
console.log(bA.getMoney);
bA.printData();
bA.pinCodeCheck(1234,20000);
bA.printData();
bA.bankName = 'MKB BANK';
console.log(bA.bankName);

let unicredit = new BankAccount('Unicredit',1234);
unicredit.setPinCode = 1234;
unicredit.setMoney = 100000;

let bA3 = new BankAccount('OTP BANK',1234);
let bA1 = new BankAccount('OTP BANK',1234);
let bA2= new BankAccount('OTP BANK',1234);
'use strict';
// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]

'use strict';
let accounts: any[] = [
  { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
  { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
  { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

class MyBank {
  private client_name: string;
  private account_number: number;
  private balance: number;

  constructor(client_name, account_number, balance) {
    this.client_name = client_name;
    this.account_number = account_number;
    this.balance = balance;
  }

  get name(): string {
    return this.client_name;
  }
  get account(): number {
    return this.account_number;
  }
  get money(): number {
    return this.balance;
  }
  set transfer(balance: number) {
    this.balance = balance;
  }
}

let Igor = new MyBank ('Igor', 11234543, 203004099.2)
let Vladimir = new MyBank ('Vladimir', 43546731, 5204100071.23)
let Sergei = new MyBank ('Sergei', 23456311, 1353600.0)


function balanceCheck(partner: string, accountNumber: number) {
let num: number = Igor.account
}

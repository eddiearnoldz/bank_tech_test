const Transaction = require('./transaction.cjs');
const date = new Date;

class Client {
  constructor() {
    this.balance = 0;
    this.name = 'Private User';
    this.transactionHistory = [];
  }

  debitBalance = (amount) => {
    if (this.#invalidEntry(amount)) {
      throw new Error('enter valid amount, e.g. 100');
    }
    this.balance -= parseFloat(amount);
    this.#addTransaction(new Transaction(`${date.toLocaleDateString('en-Gb')}`, amount.toFixed(2), 'debit', parseFloat(this.balance).toFixed(2)));
  };

  creditBalance = (amount) => {
    if (this.#invalidEntry(amount)) {
      throw new Error('enter valid amount, e.g. 100');
    }
    this.balance += parseFloat(amount);
    this.#addTransaction(new Transaction(`${date.toLocaleDateString('en-Gb')}`, amount.toFixed(2), 'credit', parseFloat(this.balance).toFixed(2)));
  };

  nameClient = (name) => {
    return this.name = name;
  };

  getName() {
    return this.name;
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }

  #invalidEntry(amount) {
    return (typeof amount === 'string' || amount instanceof String || amount <= 0) ? true : false;
  }

  #addTransaction(transaction) {
    return this.transactionHistory.unshift(transaction);
  }
}
module.exports = Client;

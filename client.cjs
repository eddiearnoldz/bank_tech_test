const Transaction = require('./transaction.cjs')
const date = new Date

class Client {
  constructor(){
  this.balance = 0
  this.name = 'Private User'
  this.transactionHistory = []
  }

  debitBalance = (amount) => {
    if (this.#invalidEntry(amount)){
      throw new Error('enter valid amount, e.g. 100')
    }
    this.balance -= parseFloat(amount);
    this.#addTransaction(new Transaction(`${date.toLocaleDateString('en-Gb')}`, amount, 'debit', parseFloat(this.balance)))
  }

  creditBalance = (amount) => {
    if (this.#invalidEntry(amount)){
      throw new Error('enter valid amount, e.g. 100')
    }
    this.balance += parseFloat(amount);
    this.#addTransaction(new Transaction(`${date.toLocaleDateString('en-Gb')}`, amount, 'credit', parseFloat(this.balance)))
  }

  nameClient = (name) => {
    return this.name = name;
  }

  getName() {
    return this.name;
  }

  getTransactionHistory()  {
    return this.transactionHistory;
  }

  mapTransactions(){
    for (let i = 0; i < this.transactionHistory.length; i++) {
     console.log(this.transactionHistory[i].amount)
    }
  }

  #invalidEntry(amount) {
    return (typeof amount === 'string' || amount instanceof String || amount <= 0) ? true : false;
  }

  #addTransaction(transaction){
    return this.transactionHistory.unshift(transaction)
  }
}
module.exports = Client;
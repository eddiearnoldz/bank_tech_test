
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
    this.transactionHistory.unshift(`${date.toLocaleDateString('en-Gb')} || || £${amount} || £${this.balance}`);
  }

  creditBalance = (amount) => {
    if (this.#invalidEntry(amount)){
      throw new Error('enter valid amount, e.g. 100')
    }
    this.balance += parseFloat(amount);
    this.transactionHistory.unshift(`${date.toLocaleDateString('en-Gb')} || £${amount} || £${this.balance}`);
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

  #invalidEntry(amount) {
    return (typeof amount === 'string' || amount instanceof String || amount <= 0) ? true : false;
  }

}
module.exports = Client;

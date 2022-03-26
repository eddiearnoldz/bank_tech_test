const date = new Date

class Client {
  constructor(){
  this.balance = 0
  this.name
  this.transactionHistory = []
  }

  debitBalance = (amount) => {
    this.balance -= amount;
    this.transactionHistory.unshift(`${date.toLocaleDateString('en-Gb')} || || £${amount} || £${this.balance}`);
  }

  creditBalance = (amount) => {
    this.balance += amount;
    this.transactionHistory.unshift(`${date.toLocaleDateString('en-Gb')} || £${amount} || £${this.balance}`);
  }

  nameClient = (name = 'Private User') => {
    return this.name = name;
  }

  getName() {
    return this.name
  }

  getTransactionHistory = () => {
    return this.transactionHistory;
  }
  
}
module.exports = Client;

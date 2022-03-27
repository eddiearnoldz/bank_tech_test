class Transaction {
  constructor(date, amount, type, currentBalance) {
    this.date = date
    this.amount = amount
    this.type = type
    this.currentBalance = currentBalance
  }

  getDate() {
    return this.date;
  }

  getAmount() {
    return this.amount;
  }

  getType() {
    return this.type;
  }

  getcurrentBalance() {
    return this.currentBalance;
  }
}

module.exports = Transaction
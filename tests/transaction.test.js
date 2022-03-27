const Transaction = require('../lib/transaction.cjs')
const Client = require('../lib/client.cjs')

describe('Transaction class', () => {
  
  it(' returns the amount of transaction', () => {
    const transaction = new Transaction('23/03/2001', 20, 'debit', 0)
    expect(transaction.getAmount()).toBe(20)
  })
  it(' returns the date of transaction', () => {
    const transaction = new Transaction('23/03/2001', 20, 'debit', 0)
    expect(transaction.getDate()).toBe('23/03/2001')
  })
  it(' returns the date of currentBalance', () => {
    const client = new Client()
    client.creditBalance(20)
    array = client.getTransactionHistory()
    expect(array[0].getcurrentBalance()).toBe(20)
  })
  it('returns the type of transaction', () => {
    const client = new Client()
    client.creditBalance(20)
    array = client.getTransactionHistory()
    expect(array[0].getType()).toBe('credit')
  })

})
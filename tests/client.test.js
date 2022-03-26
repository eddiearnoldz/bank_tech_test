const Client = require('../client.cjs')

describe('Client class', () => {
  let client

  beforeEach(() => {
     client = new Client
  })

  it('has a default balance of 0', () => {
    expect(client.balance).toBe(0)
  })
  it('has an array to store transactions', () => {
    expect(client.transactionHistory).toEqual([])
  })
  it('can increase the balance by a given amount', () => {
    client.creditBalance(10)
    expect(client.balance).toBe(10)
  })
  it('can decrease the balance by a given amount', () => {
    client.debitBalance(10)
    expect(client.balance).toBe(-10)
  })
  it('returns multiple transactions', () =>{
    client.creditBalance(10)
    client.creditBalance(10)
    client.debitBalance(10)
    expect(client.getTransactionHistory().length).toBe(3)
  })
  it('can give the client a name', () => {
    client.nameClient('John')
    expect(client.getName()).toBe('John')
  })
  it("returns a default chosen name of 'Private User'", () => {
    client.nameClient()
    expect(client.getName()).toBe('Private User')
  })
})
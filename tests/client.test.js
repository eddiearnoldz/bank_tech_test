const Client = require('../lib/client.cjs');

describe('Client class', () => {
  let client;

  beforeEach(() => {
    client = new Client;
  });

  it('has a default balance of 0', () => {
    expect(client.balance).toBe(0);
  });

  it('has an array to store transactions', () => {
    expect(client.transactionHistory).toEqual([]);
  });

  it('can increase the balance by a given amount', () => {
    client.creditBalance(10);
    expect(client.getBalance()).toBe("10.00");
  });

  it('can decrease the balance by a given amount', () => {
    client.debitBalance(10);
    expect(client.getBalance()).toBe("-10.00");
  });

  it('adds the transactions and returns a current balance', () => {
    client.creditBalance(10);
    client.creditBalance(10);
    client.debitBalance(10);
    expect(client.getBalance()).toBe("10.00");
  });

  it('returns multiple transactions', () =>{
    client.creditBalance(10);
    client.creditBalance(10);
    client.debitBalance(10);
    expect(client.getTransactionHistory().length).toBe(3);
  });

  it('can give the client a name', () => {
    client.nameClient('John');
    expect(client.getName()).toBe('John');
  });

  it('returns a default chosen name of \'Private User\'', () => {
    expect(client.getName()).toBe('Private User');
  });

  it('throws an error if a string is inputted for amount', () => {
    expect(() => {
      client.creditBalance('a');
    }).toThrow(('enter valid amount, e.g. 100'));
  });

  it('throws an error if a negative number is inputted for amount', () => {
    expect(() => {
      client.creditBalance(-1);
    }).toThrow(('enter valid amount, e.g. 100'));
  });
  
});

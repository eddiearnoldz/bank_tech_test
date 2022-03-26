const Client = require('./client.cjs')

describe('Client class', () => {
  let client

  beforeEach(() => {
     client = new Client
  })

  it('has a default balance of 0', () => {
    expect(client.balance).toBe(0)
  })
})
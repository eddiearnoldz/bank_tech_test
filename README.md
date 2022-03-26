# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

# Initial thoughts

- Clients should be members of a bank
- they each have an account
- the balance should be saved in the client object and altered with deposit or withdraw functions. These take one argument. An amount. Date added on transaction
- the balance could be rendered after each function is called in the specified layout.
- an grid/template is created to show the transactions and final balance


# Screenshots of CLI

<img src="images/Screenshot 2022-03-26 at 00.49.24.png" alt="screen shot of CLI" width="400px"/>
<img src="images/Screenshot 2022-03-26 at 00.50.19.png" alt="screen shot of CLI" width="400px"/>
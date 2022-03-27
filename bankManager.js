import Client from './lib/client.cjs'
import boxen from 'boxen';
import readline from 'readline';
import chalk from 'chalk';
const rl = readline.createInterface({input: process.stdin,output: process.stdout});
const optionsScript = '\n 1. Withdraw money\n 2. Deposit money\n 3. See statement\n 4. Show balance\n 5. Exit\n'
const date = new Date
const user = new Client

const introQuestion = () => {
  return new Promise((resolve, reject) => {
    rl.question("", (answer) => {
      if (answer==="") {
        console.log(`Nice to meet you, ${user.getName()}. `)
      } else {
        user.nameClient(answer)
        console.log(`Nice to meet you, ${user.getName()}. `)
      }
      resolve()
    });
  })
}
const optionsQuestion = () => {
  return new Promise((resolve, reject) => {
    rl.question(`How can I help today? ${optionsScript}`, (answer) => {
     clientChoice(answer)
    })
  });
}
const furtherAssistance = () => {
  return new Promise((resolve, reject) => {
    rl.question(`Anything else? ${optionsScript}`, (answer) => {
     clientChoice(answer)
    })
  })
}
const renderBankTitle = () => {
  console.log(boxen(" Welcome to Makers Bank, can i take your name? ", 
  {title: ` Makers Bank`, titleAlignment: 'center', borderColor: 'yellow', borderStyle:'round'}));
}

const clientChoice = (input) => {
  switch(input) {
  case '1':
    rl.question('How much would you like to withdraw?\n', (amount) => {
      try {
        if (invalidEntry(amount)) {throw new Error('enter valid amount, e.g. 100')}
        user.debitBalance(parseFloat(amount));
        console.log(chalk.red(`withdrew £${amount} on ${date.toLocaleDateString('en-Gb')}`));
        furtherAssistance()
      } catch(error) {
        console.log(error.message)
        furtherAssistance()
      }
    })
    break;
  case '2':
    rl.question('How much would you like to deposit?\n', (amount) => {
      try {
      if (invalidEntry(amount)){ throw new Error('enter valid amount, e.g. 100')}
      user.creditBalance(parseFloat(amount));
      console.log(chalk.green(`deposited £${amount} on ${date.toLocaleDateString('en-Gb')}`));
      furtherAssistance()
    } catch(error) {
      console.log(error.message)
      furtherAssistance()
    }
    })
    break;
  case '3':
    statement()
    furtherAssistance()
    break;
  case '4':
    finalBalance()
    furtherAssistance()
    break;
  case '5':
    console.log(`Have a nice day, ${user.name}`)
    rl.close()
    break;
  default :
    console.log('Choose one of the options by number\n')
    optionsQuestion()
    break;
  }
}
const statement = () => {
  renderStatementTitle()
    historyEmpty() ?
      console.log(boxen(' No recent transactions ', 
      {borderColor: 'white', borderStyle:'round'}))
    :
    mapTransactions()
}
const finalBalance = () => {
  (user.balance >= 0) ?
  console.log(boxen(` Balance     ||     £${user.balance}  `, 
  {title: `${user.name}'s Current Account`, titleAlignment: 'center', borderColor: 'green', borderStyle:'round'}))
:
  console.log(boxen(` Balance || £${user.balance} `, 
  {title: `${user.name}'s Current Account`, titleAlignment: 'center', borderColor: 'red', borderStyle:'round'}));
}
const transactionType = (transaction) => {
  if(transaction.getType() === 'debit') {
  console.log(chalk.red(boxen(` ${transaction.getDate()} || || £${transaction.getAmount()} || £${transaction.getcurrentBalance()} `, 
    {dimBorder:'true', borderStyle:'round'})))
  } else {
  console.log(chalk.green(boxen(` ${transaction.getDate()} || £${transaction.getAmount()} || £${transaction.getcurrentBalance()} `, 
    {dimBorder:'true', borderStyle:'round'})))
  }
}
const invalidEntry = (amount) => {
  return (amount.match(/^[0-9]+$/)) ? false : true;
}
const renderStatementTitle = () => {
  console.log(boxen(' date || credit || debit || balance ', 
  {title: `${user.name}'s Bank Statement`, titleAlignment: 'center', borderColor: 'yellow', borderStyle:'round'}));
}

const historyEmpty = () => {
  return (user.getTransactionHistory().length === 0) ? true : false
}
const mapTransactions = () => {
  for (let i = 0; i < user.transactionHistory.length; i++) {
    transactionType(user.transactionHistory[i])
   }
}
const bankManager = async () => {
  renderBankTitle()
  await introQuestion()
  await optionsQuestion()
  await furtherAssistance()
}
bankManager()


import Client from './client.cjs'
import boxen from 'boxen';
import readline from 'readline';
import chalk from 'chalk';
import moment from 'moment';
const rl = readline.createInterface({input: process.stdin,output: process.stdout});
const optionsScript = '\n 1. Withdraw money\n 2. Deposit money\n 3. See statement\n 4. Show balance\n 5. Exit\n'


const introQuestion = () => {
  return new Promise((resolve, reject) => {
    rl.question("", (answer) => {
      console.log(`Nice to meet you, ${answer}. `)
      user.nameClient(answer)
      resolve()
    })
  })
}
const optionsQuestion = () => {
  return new Promise((resolve, reject) => {
    rl.question(`How can I help today? ${optionsScript}`, (answer) => {
     clientChoice(answer)
    })
  })
}
const furtherAssistance = () => {
  return new Promise((resolve, reject) => {
    rl.question(`Anything else? ${optionsScript}`, (answer) => {
     clientChoice(answer)
    })
  })
}
const user = new Client
const bankManager = async () => {
  console.log(boxen(" Welcome to Maker's Bank, can i take your name? ", 
  {title: ` Makers Bank`, titleAlignment: 'center', borderColor: 'yellow', borderStyle:'round'}));
  await introQuestion()
  await optionsQuestion()
  await furtherAssistance()
}
bankManager()


const clientChoice = (input) => {
  if ((input) === '1') {
    rl.question('How much would you like to withdraw?\n', (amount) => {
      user.debitBalance(parseFloat(amount));
      console.log(chalk.red(`withdrew £${amount} on ${moment().format('DD/MM/YYYY')}`));
      furtherAssistance()
    })
  } else if ((input) === '2') {
    rl.question('How much would you like to deposit?\n', (amount) => {
      user.creditBalance(parseFloat(amount));
      console.log(chalk.green(`deposited £${amount} on ${moment().format('DD/MM/YYYY')}`));
      furtherAssistance()
    })
  } else if ((input) === '3') {
    statement()
    furtherAssistance()
  } else if ((input) === '4') {
    finalBalance()
    furtherAssistance()
  } else if ((input) === '5') {
    console.log(`Have a nice day, ${user.name}`)
    rl.close()
  }else {
    console.log('Choose one of the options by number\n')
    optionsQuestion()
  }
}
const statement = () => {
  console.log(boxen(' date || credit || debit || balance ', 
  {title: `${user.name}'s Bank Statement`, titleAlignment: 'center', borderColor: 'yellow', borderStyle:'round'}));
    user.getTransactionHistory().map(transaction =>{
    transactionType(transaction)
    })
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
  (transaction.includes('|| ||')) ?
  console.log(chalk.red(boxen(transaction, 
    {dimBorder:'true', borderStyle:'round'})))
:
  console.log(chalk.green(boxen(transaction, 
    {dimBorder:'true', borderStyle:'round'})))
}
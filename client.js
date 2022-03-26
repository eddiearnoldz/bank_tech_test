import boxen from 'boxen';
import moment from 'moment';
import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choice = (input) => {
  if ((input) === '1') {
    rl.question('How much would you like to withdraw?\n', (amount) => {
      user.debitBalance(parseFloat(amount));
      question3()
    })
  } else if ((input) === '2') {
    rl.question('How much would you like to deposit?\n', (amount) => {
      user.creditBalance(parseFloat(amount));
      question3()
    })
  } else if ((input) === '3') {
    user.statement()
    question3()
  } else if ((input) === '4') {
    console.log(`Have a nice day, ${user.name}`)
    rl.close()
  } else {
    console.log('Choose one of the options by number\n')
    question2()
  }
}
class Client {
  constructor(){
  this.balance = 0
  this.name = 
  this.transactionHistory = []
  }

  debitBalance = (amount) => {
    this.balance -= amount;
    this.transactionHistory.unshift(`${moment().format('l')} || || £${amount} || £${this.balance}`);
    console.log(`withdrew £${amount}`)
  }

  creditBalance = (amount) => {
    this.balance += amount;
    this.transactionHistory.unshift(`${moment().format('l')} || £${amount} || £${this.balance}`);
    console.log(`deposited £${amount}`)
  }

  nameClient = (name) => {
    this.name = name
  }

  statement = () =>{
    console.log(boxen('date || credit || debit || balance', 
    {title: `${this.name}'s Bank Statement`, titleAlignment: 'center', borderColor: 'yellow', borderStyle:'round'}));
    this.transactionHistory.map(transaction =>{
      if(transaction.includes('|| ||')){
        console.log(boxen(transaction, 
          {dimBorder:'true', backgroundColor:'red', borderStyle:'round'}))
      } else {
        console.log(boxen(transaction, 
          {dimBorder:'true', backgroundColor:'green', borderStyle:'round'}))
      }
    })
    if(this.balance >= 0){
      console.log(boxen(`Balance || £${this.balance}`, 
      {title: `${this.name}'s Bank Statement`, titleAlignment: 'center', borderColor: 'green', borderStyle:'round'}));
    } else {
      console.log(boxen(`Balance || £${this.balance}`, 
      {title: `${this.name}'s Bank Statement`, titleAlignment: 'center', borderColor: 'red', borderStyle:'round'}));
    }
  }
}
const user = new Client()
const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("", (answer) => {
      console.log(`Nice to meet you, ${answer}. `)
      user.nameClient(answer)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('How can i help today?\n 1. withdraw money\n 2. deposit money\n 3. see statement\n 4. exit\n', (answer) => {
     choice(answer)
    })
  })
}
const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Anything else?\n 1. withdraw money\n 2. deposit money\n 3. see statement\n 4. exit\n', (answer) => {
     choice(answer)
    })
  })
}

const bankManager = async () => {
  console.log(boxen("Welcome to Maker's Bank, can i take your name?", 
  {title: `Makers Bank`, titleAlignment: 'center', borderColor: 'yellow', borderStyle:'round'}));
  await question1()
  await question2()
  await question3()
}
bankManager()


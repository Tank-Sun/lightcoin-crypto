class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
  	let balance = 0;
    for (let transaction of this.transactions) {
    	balance += transaction.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    if (this.account.balance + this.value < 0) return false;
    // Keep track of the time of the transaction
    this.time = new Date();
    // Add the transaction to the account
    this.account.addTransaction(this);
  }

}

class Withdrawal extends Transaction {

  get value() {
    return - this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }


}


const myAccount = new Account("snow-patrol");

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

// const t1 = new Withdrawal(50.25, myAccount);
// console.log('new account:', myAccount);
// // console.log('new account Transaction:', myAccount.transactions);
// t1.commit();
// console.log('Transaction 1:', t1);
// console.log('Commit result:', t1.commit());
// console.log('Transaction 1:', myAccount.transactions);
// console.log('Balance1:', myAccount.balance);

// const t2 = new Withdrawal(9.99, myAccount);
// t2.commit();
// // console.log('Transaction 2:', t2);

const t3 = new Deposit(120.00, myAccount);
// console.log('Transaction 3:', t3);
console.log('Commit result:', t3.commit());
// console.log('Transaction 3 after commit:', t3);

console.log('Balance3:', myAccount.balance);
console.log('Account Transaction History: ', myAccount.transactions);

const t4 = new Deposit(120.00, myAccount);
// console.log('Transaction 4:', t4);
console.log('Commit result:', t4.commit());
// console.log('Transaction 4 after commit:', t4);

console.log('Balance4:', myAccount.balance);
console.log('Account Transaction History: ', myAccount.transactions);

const t2 = new Withdrawal(999, myAccount);
// console.log('Transaction 2:', t2);
console.log('Commit result:', t2.commit());
// console.log('Transaction 2 after commit:', t2);

console.log('Balance2:', myAccount.balance);
console.log('Account Transaction History: ', myAccount.transactions);



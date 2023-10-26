// Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  // Add amount to balance
  deposit(amount) {
    this.balance += amount;
  }

  // Subtract amount from balance
  withdraw(amount) {
    this.balance -= amount;
  }

  // Returns owner and balance in the account
  displayBalance() {
    return `Owner: ${this.owner} Balance: ${this.balance}`;
  }
}

const account = new BankAccount("John", 1000);

// Deposit amount to account
account.deposit(300);

// Withdraw from account
account.withdraw(150);

// Display balance in account
console.log(account.displayBalance());

/* exported Bank */
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && typeof balance === 'number' && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
  } else {
    return null;
  }
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBankBalance = 0;
  if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      totalBankBalance += this.accounts[i].getBalance();
    }
    return totalBankBalance;
  } else {
    return 0;
  }
};

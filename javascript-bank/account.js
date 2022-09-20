/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  var successBool = true;
  if (amount > 0 && typeof amount === 'number' && Number.isInteger(amount)) {
    this.transactions.push(deposit);
  } else {
    successBool = false;
  }
  return successBool;
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);
  var successBool = true;
  if (amount > 0 && typeof amount === 'number' && Number.isInteger(amount)) {
    this.transactions.push(withdrawal);
  } else {
    successBool = false;
  }
  return successBool;
};

Account.prototype.getBalance = function () {
  var accountBalance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      accountBalance += parseInt(this.transactions[i].amount);
    }
    if (this.transactions[i].type === 'withdrawal') {
      accountBalance -= parseInt(this.transactions[i].amount);
    }
  }
  return accountBalance;
};

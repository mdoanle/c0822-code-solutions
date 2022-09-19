/* exported calculator */
var calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  },
  square(x) {
    return x * x;
  },
  sumAll(numbers) {
    var returnNum = 0;
    for (var i = 0; i < numbers.length; i++) {
      returnNum += numbers[i];
    }
    return returnNum;
  },
  getAverage(numbers) {
    return this.sumAll(numbers) / numbers.length;
  }

};

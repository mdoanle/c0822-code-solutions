var width = 15;
var height = 25;
var area = width * height;
var bill = 35.00;
var payment = 40.00;
var change = payment - bill;
var quizzes = 75;
var midterm = 88;
var final = 85;
var grade = (quizzes + midterm + final) / 3;
var firstName = 'Tom';
var lastName = 'Brady';
var fullName = firstName + ' ' + lastName;
var pH = 7.1;
var isAcidic = pH < 7;
var headCount = 300;
var isSparta = headCount === 300;
var motto = fullName + ' is the GOAT';

console.log('Value of area:', area);
console.log('typeof area:', typeof area);

console.log('Value of change:', change);
console.log('typeof change:', typeof change);

console.log('Value of grade:', grade);
console.log('typeof grade:', typeof grade);

console.log('Value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

console.log('Value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

console.log('Value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

console.log('Value of motto:', motto);
console.log('typeof motto:', typeof motto);

var student = {
  firstName: 'Markus',
  lastName: 'Doan-Le',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Trader Joes';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('Value of previousOccupation:', student.previousOccupation);
console.log('Value of student object:', student);

var vehicle = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1999
};

vehicle['color'] = 'White';
vehicle['isConvertible'] = false;
console.log('Value of vehicle[color]:', vehicle['color']);
console.log('Value of vehicle[isConvertible]:', vehicle['isConvertible']);
console.log('Value of entire vehicle object:', vehicle);

var pet = {
  name: 'Nina',
  type: 'Cat'
};

delete pet.name;
delete pet.type;
console.log('Value of pet:', pet);

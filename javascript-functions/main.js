function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log('Result of function convertMinutesToSeconds:', convertMinutesToSeconds(5));
console.log('Result of function greet:', greet('Beavis'));
console.log('Result of function getArea:', getArea(17, 42));
console.log('Result of function getFirstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log('Result of function getLastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));

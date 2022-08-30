function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  var greeting = 'Hey, ' + name;
  console.log('Result of greet function:', greeting);
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  console.log('Result of getFirstName function:', person.firstName);
}

function getLastElement(array) {
  var lastIndex = array.length - 1;
  console.log('Result of getLastElement function:', array[lastIndex]);
}

console.log('Result of function convertMinutesToSeconds:', convertMinutesToSeconds(5));
console.log(greet('Beavis'));
console.log('Result of function getArea:', getArea(17, 42));
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));

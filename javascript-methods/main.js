var num1 = 15;
var num2 = 3;
var num3 = 97;

var maximumValue = Math.max(num1, num2, num3);
console.log('The value of maximumValue is:', maximumValue);

var heroes = ['Iron Man', 'Cable', 'Spider-Man', 'Thor'];

var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('The value of randomHero:', randomHero);

var library = [
  {
    title: 'Berserk',
    author: 'Kentaro Miura'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  },
  {
    title: 'Hyperion',
    author: 'Dan Simmons'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of the library array:', library);

var fullName = 'Markus Doan-Le';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);

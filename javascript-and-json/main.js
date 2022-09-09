var library = [
  {
    isbn: '0-6756-7789-0',
    title: 'The Musty Book',
    author: 'Darnell'
  },
  {
    isbn: '0-4980-9608-4',
    title: 'The Art of War',
    author: 'Sun Tzu'
  },
  {
    isbn: '0-2748-6071-6',
    title: 'Berserk',
    author: 'Kentaro Miura'
  }
];

console.log('library:', library);
console.log('library type:', typeof library);

console.log('library post JSON:', JSON.stringify(library));
console.log('library type:', typeof JSON.stringify(library));

var student = '{ "id": 1186695 , "name":"Antonio Banderas"}';
console.log('JSON:', student);
console.log('JSON type:', typeof student);

console.log('parsed JSON:', JSON.parse(student));
console.log('parsed JSON type', typeof JSON.parse(student));

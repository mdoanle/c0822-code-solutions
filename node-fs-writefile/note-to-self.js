const fs = require('fs');
const noteToSelf = process.argv[2] + '\n';

fs.writeFile('note.txt', noteToSelf, 'utf8', err => {
  if (err) throw err;
});

const fs = require('fs');

const randomNum = Math.random() + '\n';

fs.writeFile('random.txt', randomNum, 'utf8', err => {
  if (err) throw err;
});

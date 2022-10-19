const takeAChance = require('./take-a-chance');

const promProm = takeAChance('Markus');

promProm.then(message => {
  console.log(message);
}).catch(error => {
  console.error(error.message);
});

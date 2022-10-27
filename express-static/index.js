const express = require('express');
const app = express();
const path = require('path');

const pathName = path.join(__dirname, 'public');

app.use(express.static(pathName));

app.listen(3000, () => {
  console.log('listening on port 3000');
});

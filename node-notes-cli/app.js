const fs = require('fs');

const read = () => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    for (const key in obj.notes) {
      console.log(`${key}: ${obj.notes[key]}`);
    }
  });
};

const write = () => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    let entryID = obj.nextId;
    obj.notes[entryID] = process.argv[3];
    entryID++;
    obj.nextId = entryID;
    const stringifyObj = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', stringifyObj, err => {
      if (err) throw err;
    });
  });
};

const remove = () => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    let entryID = obj.nextId;
    delete obj.notes[process.argv[3]];
    entryID--;
    obj.nextId = entryID;
    const stringifyObj = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', stringifyObj, err => {
      if (err) throw err;
    });
  });
};

const modify = () => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    obj.notes[process.argv[3]] = process.argv[4];
    const stringifyObj = JSON.stringify(obj, null, 2);
    fs.writeFile('data.json', stringifyObj, err => {
      if (err) throw err;
    });
  });
};

if (process.argv[2] === 'read') {
  read();
} else if (process.argv[2] === 'write') {
  write();
} else if (process.argv[2] === 'delete') {
  remove();
} else if (process.argv[2] === 'change') {
  modify();
}

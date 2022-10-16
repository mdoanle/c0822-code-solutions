const express = require('express');
const fs = require('fs');
const app = express();

app.get('/api/notes', (req, res) => {
  const noteArr = [];
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err;
    const obj = JSON.parse(data);
    const notes = obj.notes;
    for (const key in notes) {
      noteArr.push(notes[key]);
    }
    res.status(200).json(noteArr);
  });
});

app.get('/api/notes/:id', (req, res) => {
  const idNum = Number(req.params.id);
  if (idNum < 0 || isNaN(idNum)) {
    res.status(400).json({ error: 'That aint a positive number!' });
  } else {
    fs.readFile('data.json', (err, data) => {
      if (err) throw err;
      const obj = JSON.parse(data);
      const notes = obj.notes;
      if (notes[idNum]) {
        res.status(200).json(notes[idNum]);
      } else {
        res.status(404).json({ error: `No entry found with id number ${idNum}` });
      }
    });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'Content field required' });
  } else {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Unexpected error occured' });
      }

      const dataObj = JSON.parse(data);
      let nextId = dataObj.nextId;

      const dataReturn = () => {
        req.body.id = nextId;
        dataObj.notes[nextId] = req.body;
        nextId++;
        dataObj.nextId = nextId;
        return dataObj;
      };

      const jsonDataModel = JSON.stringify(dataReturn(), null, 2);
      fs.writeFile('data.json', jsonDataModel, 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'Unexpected error occured' });
        } else {
          res.status(201).json(req.body);
        }
      });
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400).json({ error: 'Id must be a positive number!' });
  }
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred!' });
    }
    const dataObj = JSON.parse(data);
    const notes = dataObj.notes;
    if (!notes[req.params.id]) {
      res.status(404).json({ error: 'Id is not valid' });
    } else {
      delete notes[req.params.id];
    }
    const updatedNotes = JSON.stringify(dataObj, null, 2);
    fs.writeFile('data.json', updatedNotes, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred!' });
      } else {
        res.status(204).json(req.body);
      }
    });
  });
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400).json({ error: 'id must be a positive number!' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'Content is a required field!' });
  }

  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error!' });
    }
    const dataObj = JSON.parse(data);
    const notes = dataObj.notes;

    if (!notes[req.params.id]) {
      res.status(404).json({ error: `No entry found at id number ${req.params.id}!` });
    }

    req.body.id = Number(req.params.id);
    notes[req.params.id] = req.body;
    const updatedObj = JSON.stringify(dataObj, null, 2);
    fs.writeFile('data.json', updatedObj, err => {
      if (err) {
        res.status(500).json({ error: 'Unexpected error!' });
      }
      res.status(200).json(req.body);
    });
  });
}
);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

const pg = require('pg');
const express = require('express');
const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurred!' });
    });
});

app.post('/api/grades', (req, res) => {
  const userInput = req.body;
  if (!userInput.name || !userInput.course || !userInput.score || userInput.score < 0 || userInput.score > 100 || isNaN(userInput.score)) {
    res.status(400).json({ error: 'Invalid inputs. Remember: name, course, and score are required' });
  } else if (!userInput.score < 0 || !userInput.score > 100) {
    res.status(400).json({ error: 'Score must be between 0 and 100!' });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
    `;

    const params = [userInput.name, userInput.course, userInput.score];

    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Unexpected error occurred!' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const userInput = req.body;
  const gradeId = Number(req.params.gradeId);
  if (!userInput.name || !userInput.course || !userInput.score || userInput.score < 0 || userInput.score > 100 || isNaN(userInput.score) || !gradeId || isNaN(gradeId)) {
    res.status(400).json({ error: 'Invalid inputs. Remember: name, course, score, and gradeID are required and gradeId must be a valid number!' });
    return;
  }

  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *
  `;

  const params = [userInput.name, userInput.course, userInput.score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Could not find grade with gradeId of ${req.params.gradeId}` });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurred!' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!gradeId || isNaN(gradeId)) {
    res.status(400).json({ error: 'Invalid inputs. Remember: name, course, score, and gradeID are required' });
    return;
  }

  const sql = `
  delete from "grades"
    where "gradeId" = $1
  returning *
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Could not find grade with a gradeId of ${gradeId}` });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occurred!' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});

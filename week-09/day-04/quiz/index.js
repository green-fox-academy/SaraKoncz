const express = require('express');
const mysql = require('mysql');
const path = require('path');
const PORT = 8080;
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'quiz',
});

app.get('/game', function (req, res) {
  conn.query('SELECT * FROM questions;', function (err, questions) {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    let randomQuestionID = Math.floor(Math.random() * (questions.length));
    let questionID = questions[randomQuestionID].id;
    let question = questions[randomQuestionID].question;
    conn.query(`SELECT * FROM answers WHERE question_id=${questionID};`, function (err, answers) {
      if (err) {
        res.status(500).send('Database error');
        return;
      }
      let response = {
        id: questionID,
        question: question,
        answers: answers
      }
      res.json({ response });
    });
  });
});

app.get('/questions', function (req, res) {
  conn.query('SELECT * FROM questions;', function (err, questions) {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    res.json({ questions });
  });
});

app.post('/question', function (req, res) {
  const question = req.body.question;
  const answer_1 = req.body.answer_1;
  const is_correct1 = parseInt(req.body.is_correct1);
  const answer_2 = req.body.answer_2;
  const is_correct2 = parseInt(req.body.is_correct2);
  const answer_3 = req.body.answer_3;
  const is_correct3 = parseInt(req.body.is_correct3);
  const answer_4 = req.body.answer_4;
  const is_correct4 = parseInt(req.body.is_correct4);

  if (is_correct1 + is_correct2 + is_correct3 + is_correct4 !== 1) {
    res.json({
      error: 'Please provide one correct answer!'
    })
    return;
  } else {
    conn.query(`INSERT INTO questions (question) VALUES ("${question}");`, function (err, res) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log("done");
      }
    });
    res.sendStatus(200);
  }
});

app.delete('/questions/:id', function (req, res) {

});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});

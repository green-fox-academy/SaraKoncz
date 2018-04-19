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

app.get('/', function (req, res) {
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
      res.render('game', { response });
    });
  });
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
    res.render('questions', { questions });
  });
});

//select * from answers inner join questions on answers.question_id = questions.id;
app.post('/question', function (req, res) {
  const { question, answer_1, is_correct1, answer_2, is_correct2, answer_3, is_correct3, answer_4, is_correct4 } = req.body;

  if (parseInt(is_correct1) + parseInt(is_correct2) + parseInt(is_correct3) + parseInt(is_correct4) !== 1) {
    res.json({
      error: 'Please provide one correct answer!'
    })
    return;
  } else {
    conn.query(`INSERT INTO questions (question) VALUES ("${question}");`, function (err, question) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      let questionID = question.insertId;
      conn.query(`INSERT INTO answers (question_id, answer, is_correct) VALUES
      (${questionID}, "${answer_1}", ${is_correct1}),
      (${questionID}, "${answer_2}", ${is_correct2}),
      (${questionID}, "${answer_3}", ${is_correct3}),
      (${questionID}, "${answer_4}", ${is_correct4});`, function (err, answer) {
          if (err) {
            res.sendStatus(500);
            return;
          }
        });
    });
  }
  res.sendStatus(200);
});

app.delete('/questions/:id', function (req, res) {
  let deleteFromQuestions = `DELETE FROM questions WHERE id=${req.params.id};`
  let deleteFromAnswers = `DELETE FROM answers WHERE question_id=${req.params.id};`
  conn.query(deleteFromQuestions, function (err, result) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    conn.query(deleteFromAnswers, function (req, result) {
      if (err) {
        res.sendStatus(500);
        return;
      }
    });
  });
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});

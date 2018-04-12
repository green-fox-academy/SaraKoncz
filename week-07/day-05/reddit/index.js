const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
let mysql = require('mysql');

app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({
    message: "Hello World",
  });
});

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'reddit',
});

app.get('/', function (req, res) {
  conn.query('SELECT * FROM posts;', function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.render('index', { rows });
  });
});


app.post('/posts', function (req, res) {
  const title = req.body.title;
  const url = req.body.url;
  if (title === undefined || url === undefined) {
    res.json({
      error: 'Please provide title and url data of the new post!'
    });
  } else {
    const newPost = { title, url, score: 0 };
    conn.query('INSERT INTO posts SET ?', newPost, (err, rows) => {
      if (err) throw err;
      res.send({ posts: rows });
    });
  }
});

app.put('/posts/:id/upvote', function (req, res) {
  let upvote = `UPDATE posts SET score = score + 1 WHERE id = ${req.params.id};`;
  conn.query(upvote, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("1 record upvoted");
      res.json(result);
    }
  });
});

app.put('/posts/:id/downvote', function (req, res) {
  let downvote = `UPDATE posts SET score = score - 1 WHERE id = ${req.params.id};`;
  conn.query(downvote, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("1 record downvoted");
      res.json(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});

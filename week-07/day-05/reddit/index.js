const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
let mysql = require('mysql');

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

app.get('/posts', function (req, res) {
  conn.query('SELECT * FROM posts;', function (err, rows) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.send({ posts: rows });
  });
});

console.log('kiscica '+ Date.now());

app.post('/posts', function (req, res) {
  const title = req.body.title;
  const url = req.body.url;
  if (title === undefined || url === undefined) {
    res.json({
      error: 'Please provide title and url data of the new post!'
    });
  } else {
    const currentTime = Date.now();
    const newPost = { title, url, timestamp: 123456789, score: 0 };
    conn.query('INSERT INTO posts SET ?', newPost, (err, rows) => {
      if (err) throw err;
      res.send({ posts: rows });
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});

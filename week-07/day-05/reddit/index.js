const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
let mysql = require('mysql');

app.get('/hello', (req, res) => {
  res.json({
    message: "Hello World",
  });
});

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'reddit',
});

app.get('/posts', function(req, res) {
  conn.query('SELECT * FROM posts;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.satus(500).send('Database error');
      return;
    }
    res.send({posts: rows});
  });
});



app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});

const express = require('express');
const path = require('path');
const mysql = require('mysql');
const moment = require('moment');

const app = express();
const PORT = 3000;
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'shop',
  port: 3306,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

const types = {
  entertainment: 1,
  groceries: 2,
  restaurant: 3,
  services: 4,
  transport: 5,
}

app.get('/', (req, res) => {
  let sql = 'SELECT * FROM history ORDER BY date DESC LIMIT 15;';
  let queryInputs = [];
  if (req.query.type !== undefined) {
    sql = 'SELECT * FROM history WHERE type = ? LIMIT 25;';
    queryInputs = [types[req.query.type]];    //varázsige
  }

  conn.query(sql, queryInputs, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.render('index', {
      title: 'Dashboard',
      history: result,
      moment,
    });
  });
});

app.get('/api/history', (req, res) => {
  let sql = 'SELECT * FROM history ORDER BY date DESC LIMIT 15;';
  let queryInputs = [];
  if (req.query.type !== undefined) {
    sql = 'SELECT * FROM history WHERE type = ? LIMIT 25;';
    queryInputs = [types[req.query.type]];    //varázsige
  }

  conn.query(sql, queryInputs, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json(result);
  });
});

app.get('/api/types', (req, res) => {
  const sql = 'SELECT * FROM types;';

  conn.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json(result);
  });
});

app.post('/api/history', (req, res) => {
  const sql = 'INSERT INTO history (title, price, type, date) VALUES (?, ?, ?, ?);';
  const queryInputs = [req.body.title, req.body.price, req.body.type, req.body.date];

  conn.query(sql, queryInputs, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.json({
      message: 'Item has been succesfully created',
      id: result.insertId,
    });
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);  //eslint-disable-line
});


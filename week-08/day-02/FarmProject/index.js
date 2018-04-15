const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
let mysql = require('mysql');

app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'farm',
});

// conn.connect(function(err) {
//   if (err) {
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });

// conn.end();

// app.get('/', function (req, res) {
  //   conn.query('SELECT * FROM posts;', function (err, rows) {
    //     if (err) {
      //       console.log(err.toString());
      //       res.satus(500).send('Database error');
//       return;
//     }
//     res.render('index', { rows });
//   });
// });


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});
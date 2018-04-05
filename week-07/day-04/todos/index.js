const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];

  res.render('todos', { todos: todos });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

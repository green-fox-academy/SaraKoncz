const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/hello', (req, res) => {
  console.log(req.query);
  const name = req.query.name || 'Guest';
  res.json({
    message: `Hello ${name}!`,
  })
})

const mentors = [
  { name: 'István', age: 30 },
  { name: 'Bence', age: 42 },
  { name: 'Balázs', age: 27 },
]

const listMentors = (req, res) => {
  //READ DATA FROM DATABASE
  res.json(mentors);
}

app.get('/api/mentors', listMentors);

app.get('/api/mentors/:mentorId', (req, res) => {
  const mentor = mentors[req.params.mentorId - 1];
  if (mentor === undefined) {
    res.status(403);
    res.json({
      message: `No mentor with id ${req.params.mentorId}`,
    })
  } else {
    res.json(mentor);
  }
})


app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});
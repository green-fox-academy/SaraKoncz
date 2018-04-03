const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const bodyParser = require('body-parser');

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});


app.get('/doubling', (req, res) => {
  if (req.query.input === undefined) {
    res.json({
      error: "Please provide an input!",
    })
  } else {
    res.json({
      received: req.query.input,
      result: req.query.input * 2
    })
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name === undefined) {
    res.json({
      error: "Please provide a name!",
    })
  }
  else if (req.query.title === undefined) {
    res.json({
      error: "Please provide a title!",
    })
  } else {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    })
  }
});

app.get('/appenda/:appended', (req, res) => {
  console.log(req.params);
  if (req.params.appended === undefined) {
    res.status(404);
  } else {
    res.json({
      appended: req.params.appended + 'a'
    })
  }
});


app.post('/dountil/:what', (req, res) => {
  const what = req.params.what;
  if (req.params.what === undefined) {
    res.json({
      error: 'Please provide a number!'
    });
  }
  else if (what === 'sum') {
    const sumThis = req.body.until;
    var sumResult = 0;
    for (var i = 0; i <= sumThis; i++) {
      sumResult += i;
    }
    res.json({
      "result": sumResult,
    })
  }
  else if (what === 'factor') {
    const factorThis = req.body.until;
    var factorResult = 1;
    if (factorThis === 0) {
      factorResult = 1;
    }
    else {
    for (var i = 1; i <= factorThis; i++) {
      factorResult= factorResult*i;
    }
  }
    res.json({
      "result": factorResult,
    })
  }
  res.end();
});



app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT} `);
});
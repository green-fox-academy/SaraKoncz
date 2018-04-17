const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;
  distance = parseInt(distance);
  time = parseInt(time);
  if (time === 0) {
    res.status(400).json({
      error: 'We cant divide by zero!',
    });
  }
  else if (!isNaN(time) && !isNaN(distance)) {
    let speed = distance / time;
    res.status(200).json({
      distance: distance,
      time: time,
      speed: speed,
    });
  } else {
    res.status(400).json({
      error: 'Please provide valid input!',
    });
  }
});

module.exports = app;

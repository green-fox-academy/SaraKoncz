const express = require('express');
const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use('/assets', express.static('assets'));

const cards = [
  {
    blackhand: [
      {num: 8, icon: 'c'},
      {num: 3, icon: 'h'},
    ],
  },  
  {
    blackhand: [ 
      {num: 4, icon: 'c'},
      {num: 5, icon: 's'},
    ],
  },  
    {
    blackhand: [
      {num: 2, icon: 'h'},
      {num: 5, icon: 's'},
    ],
  }, 
    {
    blackhand: [
      {num: 4, icon: 'd'},
      {num: 5, icon: 's'},
    ],
  }, 
  {
    blackhand: [
      {num: 8, icon: 'c'},
      {num: 5, icon: 's'},
    ],
  }, 
];

app.get('/', (req, res) => {
  res.render ('poker', {
    cardData: cards,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

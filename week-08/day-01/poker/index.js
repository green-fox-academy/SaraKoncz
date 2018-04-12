const express = require('express');
const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use('/assets', express.static('assets'));
app.use(express.json());

const expectedResult = 'White wins! - (High card: Ace)';
const blackHand = ['3H', '3D', '5S', '9C', 'KD'];
const whiteHand = ['3C', '3H', '4S', '8C', 'AH'];

app.get('/', (req, res) => {
  res.render('poker', {
    blackHand,
    whiteHand
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

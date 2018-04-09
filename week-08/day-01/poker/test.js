const test = require('tape');
const pokerCalculator = require('./pokerCalculator');

test('High card in white hand: Ace', (t) => {
  const expectedResult = 'White wins! - (High card: Ace)';
  const blackHand = ['2H', '3D', '5S', '9C', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'AH'];

  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('High card in black hand: Ace', (t) => {
  const expectedResult = 'Black wins! - (High card: Ace)';
  const blackHand = ['2H', '3D', '5S', '9C', 'AD'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'KD'];

  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('High card in black hand: T', (t) => {
  const expectedResult = 'Black wins! - (High card: Ten)';
  const blackHand = ['2H', '3D', '5S', '6C', 'TH'];
  const whiteHand = ['2C', '3H', '4S', '8C', '9D'];

  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('Pair in black hand', (t) => {
  const expectedResult = 'Black wins! - (Pair: 5)';
  const blackHand = ['2H', '5D', '5S', 'KC', 'AH'];
  const whiteHand = ['2C', '3H', '4S', '8C', 'KD'];

  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('Pair in any hand', (t) => {
  const expectedResult = 'White wins! - (Pair: 8)';
  const blackHand = ['2H', '3D', '5S', '9C', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', '8S'];

  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('Drill in any hand', (t) => {
  const expectedResult = 'Black wins! - (Drill: K)';
  const blackHand = ['2H', '2D', '2S', 'TC', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', '8S'];

  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

/*
const [
  1
  [
    ['2H', '3D', '5S', '9C', 'KD'],
    ['2C', '3H', '4S', '8C', 'AH'],
    'White wins! - (High card: Ace)'
  ],
  2
  [
    ['2H', '3D', '5S', '9C', 'AD'],
    ['2C', '3H', '4S', '8C', 'KD'],
    'Black wins! - (High card: Ace)'
  ],
  3
  [
    ['2H', '3D', '5S', '6C', 'TH'],
    ['2C', '3H', '4S', '8C', '9D'],
    'Black wins! - (High card: Ten)'
  ],
  4
  [
    ['2H', '5D', '5S', 'KC', 'AH'],
    ['2C', '3H', '4S', '8C', 'KD'],
    'Black wins! - (Pair: 5)'
  ],
  5
  [
    ['2H', '3D', '5S', '9C', 'KD'],
    ['2C', '3H', '4S', '8C', '8S'],
    'White wins! - (Pair: 8)'
  ],
  6
  [
    ['2H', '2D', '2S', 'TC', 'KD'],
    ['2C', '3H', '4S', '8C', '8S'],
    'Black wins! - (Drill: K)'
  ],
  7
  [
    ['2H', '3H', '5H', 'KH', 'AH'],
    ['2C', '4H', '4S', '8C', '8S'],
    'Black wins! - (Flush: H)'
  ]
]*/
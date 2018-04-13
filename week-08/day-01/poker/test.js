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
  const blackHand = ['3D', '2H', '9C', '5S', 'AD'];
  const whiteHand = ['3H', '2D', '4S', 'KD', '8S'];

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
  const expectedResult = 'Black wins! - (Drill: 2)';
  const blackHand = ['2H', '2D', '2S', 'TC', 'KD'];
  const whiteHand = ['2C', '3H', '4S', '8C', '8S'];

  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('Flush in any hand', (t) => {
  const expectedResult = 'Black wins! - (Flush: H)';
  const blackHand = ['AH', '3H', '5H', 'KH', '2H'];
  const whiteHand = ['8C', '4H', '4S', '8C', '2S'];

  t.equal(pokerCalculator(blackHand, whiteHand), expectedResult);
  t.end();
});

test('Flush in any both hand', (t) => {
  const expectedResult = 'Black wins! - (Flush: H)';
  const blackHand = ['2H', '3H', '5H', 'JH', 'AH'];
  const whiteHand = ['2C', '4C', '4C', '8C', 'QC'];

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
    'Black wins! - (Drill: 2)' //originally it was Drill:K, so I corrected it to 2
  ],
  7
  [
    ['2H', '3H', '5H', 'KH', 'AH'],
    ['2C', '4H', '4S', '8C', '8S'],
    'Black wins! - (Flush: H)'
  ]
]*/

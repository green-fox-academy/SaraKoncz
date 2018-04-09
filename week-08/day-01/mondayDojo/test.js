'use strict';

const test = require('tape');
const calculateResult = require('./calculate');

test('zero i 0', (t) => {
  const result = 0;
  const frames = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ];

  t.equal(calculateResult(frames), result);
  t.end();
});

//Az első elem 1
test('first frame\'s first  value', (t) => {
  const result = 1;
  const frames = [
    [1, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ];

  t.equal(calculateResult(frames), result);
  t.end();
});

//Az első turn mindkét elemében döntöttük le
test('first frame\'s result', (t) => {
  const result = 7;
  const frames = [
    [1, 6],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ];

  t.equal(calculateResult(frames), result);
  t.end();
});

//Az első turn mindkét elemében döntöttük le, illete egy egy körben hány bábut gurítottunk le
test('first frame\'s result', (t) => {
  const result = 13;
  const frames = [
    [1, 6],
    [2, 4],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ];

  t.equal(calculateResult(frames), result);
  t.end();
});

//ha spare van, be kell számítani az kövi gurítást
test('first frame\'s result', (t) => {
  const result = 23;
  const frames = [
    [1, 6], //=
    [5, 5], //10+3
    [3, 0], //3
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ];

  t.equal(calculateResult(frames), result);
  t.end();
})

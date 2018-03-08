'use strict';
import { test } from 'tape';
import { Apple } from './apples';

test('testing getApple', t => {
  let testApple = new Apple();
  let actual = testApple.getApple();
  let expected = 'apple';
  t.equal(actual, expected);
  t.end();
});


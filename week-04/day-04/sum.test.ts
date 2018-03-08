'use strict';
import { test } from 'tape';
import { SumClass } from './sum';

test('testing sum', t => {
  let testSum = new SumClass([1,2,3,4,5]);
  let actual = testSum.sum(this.list);
  let expected = 15;
  t.equal(actual, expected);
  t.end();
})

test('testing sum', t => {
  let testSum = new SumClass([]);
  let actual = testSum.sum(this.list);
  let expected = 0;
  t.equal(actual, expected);
  t.end();
})

test('testing sum', t => {
  let testSum = new SumClass([8]);
  let actual = testSum.sum(this.list);
  let expected = 8;
  t.equal(actual, expected);
  t.end();
})

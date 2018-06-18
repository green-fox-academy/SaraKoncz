import { test } from 'tape';
import { commonLettersLister } from './exam18';

test('common letters test without duplicaton', (t) => {
  const string1 = 'abc';
  const string2 = 'cde';
  const expectedResult = ['c'];

  t.deepEqual(commonLettersLister(string1, string2), expectedResult);
  t.end();
});

test('common letters test with duplicaton in string1', (t) => {
  const string1 = 'acabc';
  const string2 = 'cade';
  const expectedResult = ['a', 'c'];

  t.deepEqual(commonLettersLister(string1, string2), expectedResult);
  t.end();
});

test('common letters test with duplicaton in string2', (t) => {
  const string1 = 'acb';
  const string2 = 'cadeccccccc';
  const expectedResult = ['a', 'c'];

  t.deepEqual(commonLettersLister(string1, string2), expectedResult);
  t.end();
});

test('common letters test with duplicaton in both strings', (t) => {
  const string1 = 'ccacbcaca';
  const string2 = 'cadeccccccc';
  const expectedResult = ['c', 'a'];

  t.deepEqual(commonLettersLister(string1, string2), expectedResult);
  t.end();
});

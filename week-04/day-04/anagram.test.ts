'use strict';
import { test } from 'tape';
import { anagram } from './anagram';

test('testing anagram', t => {
  t.equal(anagram('alma', 'lama'), true);
  t.equal(anagram('almm', 'lama'), false);
  t.equal(anagram('alm', 'lama'), false);
  t.end();
})

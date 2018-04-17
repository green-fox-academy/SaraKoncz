'use strict';
var request = require('supertest');
var app = require('../server');
var test = require('tape');

// test('First test!', function (t) {
//   t.end();
// }); 

// test('Correct users returned', function (t) {
//   request(app)
//     .get('/api/users')
//     .expect('Content-Type', /json/)
//     .expect(200)
//     .end(function (err, res) {
//       t.end();
//     });
// }); 

test('Correct users returned', function (t) {
  request(app)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      var expectedUsers = ['John', 'Betty', 'Hal'];

      t.error(err, 'No error');
      t.same(res.body, expectedUsers, 'Users as expected');
      t.end();
    });
});
'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

test('groot endpoint2', (t) => {
  request(app)
    .get('/groot/?message=kiscica')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "received": "kiscica",
      "translated": "I am Groot!"
  })
    .end((err, res) => {
      t.error(err);     
      t.end();
    });
});

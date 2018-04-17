'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('yondu without valid input', (t) => {
  request(app)
    .get('/yondu')
    .expect(400)
    .expect('Content-Type', /json/)
    .expect({
      "error": "Please provide valid input!"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('yondu with time=0 input', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=0')
    .expect(400)
    .expect('Content-Type', /json/)
    .expect({
      "error": "We cant divide by zero!"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('yondu with NaN input', (t) => {
  request(app)
    .get('/yondu?distance=kutya&time=cica')
    .expect(400)
    .expect('Content-Type', /json/)
    .expect({
      "error": "Please provide valid input!"
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('yondu with valid input', (t) => {
  request(app)
    .get('/yondu?distance=100&time=10')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "distance": 100,
      "time": 10,
      "speed": 10
    })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

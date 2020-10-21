'use strict';

const express = requestuire('express');
const router = express.Router();

// db array
let db = [];

// Route
// CATEGORIES
router.get('/categories', (request, response, next) => {
  let count = db.length;
  let results = db;
  response.status(200).json({ count, results });
});

router.get('/categories/:id', (request, response, next) => {
  let id = request.params.id;
  let record = db.filter(record => record.id === parseInt(id));
  response.status(200).json(record[0]);
});

router.post('/categories', (request, response, next) => {
  let { name } = request.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  response.status(200).json(record);
});

router.put('/categories/:id', (request, response, next) => {
  let idToUpdate = request.params.id;
  let { name, id } = request.body;
  let updatedRecord = { name, id };
  db = db.map(record => {
    record.id === parseInt(idToUpdate) ? updatedRecord : record;
  });
  response.status(200).json(updatedRecord);
});

router.delete('/categories/:id', (request, response, next) => {
  let id = request.params.id;
  db = db.filter(record => record.id !== parseInt(id));
  response.status(200).json({});
});


//PRODUCTS
router.get('/products', (request, response, next) => {
  let count = db.length;
  let responseults = db;
  response.status(200).json({ count, responseults });
});

router.get('/products/:id', (request, response, next) => {
  let id = request.params.id;
  let record = db.filter(record => record.id === parseInt(id));
  response.status(200).json(record[0]);
});

router.post('/products', (request, response, next) => {
  let { name } = request.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  response.status(200).json(record);
});

router.put('/products/:id', (request, response, next) => {
  let idToUpdate = request.params.id;
  let { name, id } = request.body;
  let updatedRecord = { name, id };
  db = db.map(record => {
    record.id === parseInt(idToUpdate) ? updatedRecord : record;
  });
  response.status(200).json(updatedRecord);
});

router.delete('/products/:id', (request, response, next) => {
  let id = request.params.id;
  db = db.filter(record => record.id !== parseInt(id));
  res.status(200).json({});
});


module.exports = router;
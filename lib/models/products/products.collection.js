'use strict';

const schema = require('./products.schema.js');
const DataModel = require('../mongo.js');

class Product extends DataModel {}

module.exports = new Product(schema);
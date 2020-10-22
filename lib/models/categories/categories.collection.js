'use strict';

const schema = require('./categories.schema.js');
const DataModel = require('../mongo.js');

class Category extends DataModel {}

// new INSTANCE of this Category
module.exports = new Category(schema);
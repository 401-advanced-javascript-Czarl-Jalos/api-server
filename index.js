'use strict';

// should require lib/server.js
const server = require('./lib/server.js');
const mongoose = require('mongoose')
require('dotenv').config();


const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

// It should call the .start() method from the server with the PORT set in your environment
server.start(process.env.PORT);
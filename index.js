'use strict';

// should require lib/server.js
const server = require('./lib/server.js');

require('dotenv').config();

// It should call the .start() method from the server with the PORT set in your environment
server.start(process.env.PORT);
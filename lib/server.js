'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const timestamp = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const router = require('./routes.js');
const error404 = require('./middleware/404.js');
const error500 = require('./middleware/500.js');

//Middlewares
app.use(express.json());
app.use(timestamp);
app.use(logger);
app.use(router);


app.get('/bad', (request, response) => {
  throw new Error('This is the bad place!');
});

//error
app.use('*', error404);
app.use(error500);

//EXPORTS
module.exports = {
  start: port => {
    const PORT = port || 3000;
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  },
};
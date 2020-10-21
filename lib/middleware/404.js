'use strict';

const error404 = (request, response, next) => {
  console.log('ERROR: UNKNOWN ROUTE!');
  response.status(404);
  response.send('THIS ROUTE DOES NOT EXIST.');
  response.end();
};

module.exports = error404;
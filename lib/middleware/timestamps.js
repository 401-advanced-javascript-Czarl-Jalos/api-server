'use strict';

const timestamp = (request, response, next) => {
  request.requestTime = new Date();
  next();
};

module.exports = timestamp;
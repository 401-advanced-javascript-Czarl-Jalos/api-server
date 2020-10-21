const logger = (request, response, next) => {
  console.log(
    ` REQUEST || Method: ${request.method} || Path: ${request.path} || Time: ${request.requestTime}`
  );
  next();
};

module.exports = logger;
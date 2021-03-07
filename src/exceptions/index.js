const HttpError = require('./httpError');

module.exports = {
  ApiNotFound: new HttpError(404, "Api Not Found")
};
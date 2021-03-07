const HttpError = require('./httpError');

module.exports = {
  BadRequest: new HttpError(400, "Bad Request"),
  ApiNotFound: new HttpError(404, "Api Not Found"),
};
const APIError = require('./api-error');

class BadRequestError extends APIError {
  constructor(message) {
    super(400, message || 'Bad Request');
  }
}
module.exports = BadRequestError;

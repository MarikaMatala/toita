const APIError = require('./api-error');

class NotFoundError extends APIError {
  constructor(message) {
    super(404, message || 'Not Found');
  }
}
module.exports = NotFoundError;
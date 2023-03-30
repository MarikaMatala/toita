const APIError = require("./APIError");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends APIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthorizedError;

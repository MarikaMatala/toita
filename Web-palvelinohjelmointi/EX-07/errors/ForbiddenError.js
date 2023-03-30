const APIError = require("./APIError");
const { StatusCodes } = require("http-status-codes");

class ForbiddenError extends APIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}

module.exports = ForbiddenError;

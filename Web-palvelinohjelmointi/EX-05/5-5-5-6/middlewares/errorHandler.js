const httpStatus = require('http-status-codes');
const errorHandler = (err, req, res, next) => {
    const status = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || httpStatus.getStatusText(status);
    res.status(status).send({ message });
  };
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, _next) => {
  console.log(err.message)
  res.status(500).send(err.message)
}

module.exports = errorHandler
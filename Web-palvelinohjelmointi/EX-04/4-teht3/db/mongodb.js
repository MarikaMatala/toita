const mongoose = require('mongoose')

mongoose.set('debug', true)
mongoose.set('strictQuery', false)

const connectMongoDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectMongoDB

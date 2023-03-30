const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'A make is required'],
  },
  model: {
    type: String,
    required: [true, 'A model is required'],
  },
  type: {
    type: String,
    required: [true, 'A type is required'],
  },
  licensePlate: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-z]{3}-\d{3}$/.test(v)
      },
      message: (props) => `${props.value} is not a valid Finnish licence plate (3 letters - 3 numbers)`
    },
    required: [true, 'A license plate is required']
  }
})

module.exports = mongoose.model('Vehicle', vehicleSchema, 'vehicles')
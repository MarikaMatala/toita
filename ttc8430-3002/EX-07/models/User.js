const mongoose = require('mongoose')

const roles = ['user']

const UserSchema = new mongoose.Schema({
  role: { type: String, 
          required: [true, 'User role needed'],
          enum: roles, default: 'user'
  },
  username: { type: String, required: [true, 'Username needed'] },
  passwordHash: String,
})

module.exports = mongoose.model('User', UserSchema)

const mongoose = require('mongoose')
const { Schema } = mongoose

const roles = ['user']

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, 'User role must be provided'],
    enum: roles, default: 'user'
  },
  username: { type: String, required: [true, 'A username must be provided'] },
  passwordHash: String,
  albums: [{ type: Schema.Types.ObjectId, ref: 'Album' }]
})

module.exports = mongoose.model('User', UserSchema)

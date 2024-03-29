const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: String,
  artist: String,
  year: Number,
  genre: String
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

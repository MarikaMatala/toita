const express = require('express');
const mongoose = require('mongoose');
const Album = require('./album');

const app = express();
const port = 3000; // change this to the desired port number

mongoose.connect('mongodb+srv://AA4495:matalasi4444@cluster0.w4tsmbv.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('Error connecting to MongoDB Atlas', err);
});

app.get('/api/albums', async (req, res) => {
  try {
    const albums = await Album.find();
    res.json(albums);
  } catch (err) {
    console.error('Error getting albums', err);
    res.status(500).send('Error getting albums');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


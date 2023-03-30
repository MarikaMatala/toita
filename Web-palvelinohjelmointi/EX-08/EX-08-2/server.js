const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Album = require

const app = express();
const port = 3000;

// connect to MongoDB
mongoose.connect('mongodb+srv://AA4495:matalasi4444@cluster0.w4tsmbv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// set up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set up routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/api/albums', (req, res) => {
    // TODO: add code to create a new album in MongoDB
});

// start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const Album = require('./models/album');

app.post('/api/albums', (req, res) => {
    const { title, artist, year } = req.body;

    const newAlbum = new Album({
        title,
        artist,
        year
    });

    newAlbum.save()
        .then(album => {
            res.status(201).json(album);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Error adding album' });
        });
});


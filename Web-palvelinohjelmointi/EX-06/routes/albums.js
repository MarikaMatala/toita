const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { NotFoundError, BadRequestError } = require('../errors');

// Define the Album model
const Album = mongoose.model('Album', {
  title: String,
  artist: String,
  year: Number
});

// Configure the router to use JSON body parsing
router.use(bodyParser.json());

// GET /albums/:id - Get an album by ID
router.get('/:id', async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      throw new NotFoundError('Album not found');
    }
    res.json(album);
  } catch (err) {
    next(err);
  }
});

// POST /albums - Create a new album
router.post('/', async (req, res, next) => {
  try {
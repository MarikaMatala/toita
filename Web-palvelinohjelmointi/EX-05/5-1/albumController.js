const Album = require('./album');

exports.listAlbums = (req, res) => {
  const { sort } = req.query;
  Album.find({})
    .sort(sort)
    .exec((err, albums) => {
      if (err) {
        res.status(500).send({ message: 'Error retrieving albums' });
      } else {
        res.send(albums);
      }
    });
};
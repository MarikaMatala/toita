exports.listAlbums = (req, res) => {
  const { sort, minYear, maxYear } = req.query;
  const query = {};
  if (minYear) {
    query.year = { $gte: parseInt(minYear) };
  }
  if (maxYear) {
    if (query.year) {
      query.year.$lte = parseInt(maxYear);
    } else {
      query.year = { $lte: parseInt(maxYear) };
    }
  }
  Album.find(query)
    .sort(sort)
    .exec((err, albums) => {
      if (err) {
        res.status(500).send({ message: 'Error retrieving albums' });
      } else {
        res.send(albums);
      }
    });
};
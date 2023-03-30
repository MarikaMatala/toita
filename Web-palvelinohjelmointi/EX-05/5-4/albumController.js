exports.listAlbums = (req, res) => {
  const { sort, minYear, maxYear, fields, search } = req.query;
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
  const select = fields ? fields.split(',').join(' ') : null;
  if (search) {
    const regex = new RegExp(search, 'i');
    query.$or = [      { title: regex },      { artist: regex }    ];
  }
  Album.find(query)
    .select(select)
    .sort(sort)
    .exec((err, albums) => {
      if (err) {
        res.status(500).send({ message: 'Error retrieving albums' });
      } else {
        res.send(albums);
      }
    });
};
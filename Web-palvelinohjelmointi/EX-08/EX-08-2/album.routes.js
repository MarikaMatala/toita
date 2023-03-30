router.get('/', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
  
    if (endIndex < await Album.countDocuments().exec()) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
  
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
  
    try {
      results.results = await Album.find().limit(limit).skip(startIndex).exec();
      res.send(results);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  });
  
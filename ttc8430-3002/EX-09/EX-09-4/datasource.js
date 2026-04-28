const Book = require('./Book');

const getBooks = async () => {
  const books = await Book.find();
  return books;
};

const getBookById = async (id) => {
  const book = await Book.findById(id);
  return book;
};

const addBook = async ({ title, author, description }) => {
  const book = new Book({ title, author, description });
  await book.save();
  return book;
};

module.exports = {
  getBooks,
  getBookById,
  addBook,
};
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB disconnected');
      process.exit(0);
    });
  });
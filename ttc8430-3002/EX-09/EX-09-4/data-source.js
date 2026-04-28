require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

const getAllUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const addUser = async (name, email, password) => {
  try {
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    return newUser;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const updateUser = async (id, name, email, password) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );
    return user;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

const deleteUser = async (id) => {
  try {
    await User.findByIdAndDelete(id);
    return true;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

module.exports = {
  connectDB,
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB disconnected');
    process.exit(0);
  });
});
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://AA4495:matalasi4444@cluster0.w4tsmbv.mongodb.net/?retryWrites=true&w=majority'', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const User = require('./models/user');

app.use(express.json());

app.post('/register', async (req, res) => {
  try {
    // Check if all the required fields are present
    const { name, email, password, passwordConfirmation } = req.body;
    if (!name || !email || !password || !passwordConfirmation) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the password and password confirmation match
    if (password !== passwordConfirmation) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Return the user object
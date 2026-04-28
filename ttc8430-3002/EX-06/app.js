const jwt = require('jsonwebtoken');

// Set up a secret key for signing and verifying JWTs
const secretKey = 'mySecretKey';

// Generate a JWT for a user
function generateToken(userId) {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
  return token;
}

// Middleware function for checking JWTs on protected routes
function requireAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = user;
    next();
  });
}

// Example route that requires authentication
app.post('/albums', requireAuth, (req, res) => {
  // Check if the user is authorized to perform this operation
  if (req.user.userId !== req.body.userId) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  // Perform the create operation
  // ...
});
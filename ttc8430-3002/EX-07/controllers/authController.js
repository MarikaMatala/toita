const bcrypt = require('bcrypt')
require('dotenv').config
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
let asyncWrapper = require("../middleware/asyncErrors");
const BadRequestError = require('../errors/BadRequestError');
const passport = require('passport')

const registerForm = (req, res) => {
  res.status(200).send(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rekisteröinti</title>
  </head>

  <body style="margin:20px;">
    <form action="/auth/register" method="post">
      <div>
        <label for="name">Nimi</label>
        <input id="name" name="name" type="text" autocomplete="name" required />
      </div>
      <div>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" autocomplete="username" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" autocomplete="email" required />
      </div>
      <div>
        <label for="password">Salasana</label>
        <input id="password" name="password" type="password" autocomplete="password" required />
      </div>
      <div>
        <label for="passwordConfirmation">Confirm Password</label>
        <input id="passwordConfirmation" name="passwordConfirmation" type="password" autocomplete="password" required />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>

  </body>

  </html>`
  );
}
const loginForm = (req, res) => {
  res.status(200).send(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login</title>
  </head>

  <body style="margin:20px;">
      <form action="/auth/login" method="post">
          <div>
              <label for="username">Username</label>
              <input id="username" name="username" type="text" autocomplete="username" required />
          </div>
          <div>
              <label for="current-password">Password</label>
              <input id="current-password" name="password" type="password" autocomplete="current-password" required />
          </div>
          <div>
              <button type="submit">Sign in</button>
          </div>
      </form>
      <div>
          <a href="/">Home</a>
      </div>
  </body>

  </html>`
  );
}
const register = asyncWrapper(async (req, res) => {
  const { username, password, passwordConfirmation } = req.body

  if (password != passwordConfirmation) throw new BadRequestError("The password doesn't match the confimation")

  const userExists = await User.findOne({ username })
  if (userExists) {
    throw new BadRequestError(`User already exists with username: ${username}`)
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const role = "user";

  const user = new User({
    role,
    username,
    passwordHash,
  })

  await user.save()

  res.redirect("/auth/login")
});
const login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login'
});
const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err) }
    res.redirect('/auth/login')
  })
}

module.exports = {
  registerForm,
  loginForm,
  register,
  login,
  logout
}

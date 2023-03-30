const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const { registerForm, loginForm, register, login, logout } = require('../controllers/authController')

passport.use(new LocalStrategy(async function verify(username, password, cb) {
    try {
        const user = await User.findOne({ username })
        const passwordCorrect = user === null
            ? false
            : await bcrypt.compare(password, user.passwordHash)

        if (!(user && passwordCorrect)) {
            return cb(null, false, { message: 'Incorrect username or password.' })
        }
        return cb(null, user)
    } catch (err) {
        return cb(err)
    }
}))
passport.serializeUser((user, cb) => {
    process.nextTick(function () {
        cb(null, { id: user.id, username: user.username })
    })
})
passport.deserializeUser((user, cb) => {
    process.nextTick(function () {
        return cb(null, user)
    })
})

router.get('/register', registerForm);
router.get('/login', loginForm);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout)

module.exports = router

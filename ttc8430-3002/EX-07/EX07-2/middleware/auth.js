const NotFoundError = require('../errors/NotFoundError');
const UnauthorizedError = require('../errors/UnauthorizedError')
const asyncWrapper = require("../middleware/asyncErrors");
const { Album } = require("../models/Album");
const User = require("../models/User");

const isAuthenticated = (req, res, next) => {
    if (!req.user) next(new UnauthorizedError("You need to be logged in to access this resource"));
    next()
};

const belongsToUser = asyncWrapper(async (req, res, next) => {
    // User
    const userId = req.user["id"];
    const user = await User.findById(userId);
    if (user.role === "admin") return next();

    // Album
    const albumId = req.params["id"];
    const album = await Album.findById(albumId);
    if (!album) throw new NotFoundError("The album with id " + albumId + " was not found")

    if (!album.owner.equals(user._id)) throw new UnauthorizedError("This album belongs to another user")
    next();
});

module.exports = { isAuthenticated, belongsToUser }
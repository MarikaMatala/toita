const { getAlbums, getAlbum, createAlbum, updateAlbum, deleteAlbum } = require("../controllers/albumsController");
const express = require("express");
const router = express.Router();
const { isAuthenticated, belongsToUser } = require("../middleware/auth")

router.get("/", isAuthenticated, getAlbums);
router.post("/", isAuthenticated, createAlbum);
router.get("/:id", isAuthenticated, belongsToUser, getAlbum);
router.put("/:id", isAuthenticated, belongsToUser, updateAlbum);
router.delete("/:id", isAuthenticated, belongsToUser, deleteAlbum);

module.exports = router;

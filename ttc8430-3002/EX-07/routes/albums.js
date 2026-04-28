const { getAlbums, getAlbum, createAlbum, updateAlbum, deleteAlbum } = require("../controllers/albumsController");
const express = require("express");
const router = express.Router();

router.get("/",  getAlbums);
router.post("/", createAlbum);
router.get("/:id", getAlbum);
router.put("/:id", updateAlbum);
router.delete("/:id", deleteAlbum);

module.exports = router;

let { Album } = require("../models/Album");

const getAlbums = async (req, res) => {
    try {
        const albums = await Album.find({});
        return res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

const getAlbum = async (req, res) => {
    const { id } = req.params;

    try {
        const singleAlbum = await Album.findById(id);
        return res.status(200).json(singleAlbum);
    } catch (error) {
        res.status(404).json({ success: false, msg: error });
    }
};

const createAlbum = async (req, res) => {
    try {
        const record = await Album.create(req.body);
        res.status(201).json({ success: true, msg: record });
    } catch (error) {
        res.status(400).json({ success: false, msg: error });
    }
};

const updateAlbum = async (req, res) => {
    try {
        await Album.updateOne({ _id: req.params.id }, req.body, { runValidators: true });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, msg: error });
    }
};

const deleteAlbum = async (req, res) => {
    try {
        await Album.deleteOne({ _id: req.params.id });
        return res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

module.exports = {
    getAlbums,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
};

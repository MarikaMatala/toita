let { Record } = require("../models/Record");

const getRecords = async (req, res) => {
    try {
        const records = await Record.find({});
        return res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

const getRecord = async (req, res) => {
    const { id } = req.params;

    try {
        const singleRecord = await Record.findById(id);
        return res.status(200).json(singleRecord);
    } catch (error) {
        res.status(404).json({ success: false, msg: error });
    }
};

const createRecord = async (req, res) => {
    try {
        const record = await Record.create(req.body);
        res.status(201).json({ success: true, msg: record });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

const updateRecord = async (req, res) => {
    try {
        await Record.updateOne({ _id: req.params.id }, req.body);
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

const deleteRecord = async (req, res) => {
    try {
        await Record.deleteOne({ _id: req.params.id });
        return res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
};

module.exports = {
    getRecords,
    getRecord,
    createRecord,
    updateRecord,
    deleteRecord,
};

const checkUsername = (req, res, next) => {
    const { user } = req.query;
    if (user !== "marika") return res.status(403).json({ success: false, msg: "Sinulla ei ole oikeuksia" });

    next();
};

module.exports = {
    checkUsername,
};
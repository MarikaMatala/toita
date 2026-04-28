const express = require("express");
const connectMongoDB = require("./database/mongodb");
const { checkUsername } = require("./middleware/auth");
const app = express();
const records = require("./routes/records");
const PORT = 3000;
require("dotenv").config();

app.use(express.json());
app.use("/api", checkUsername);
app.use("/api/records", records);
app.use(express.static("public"));

app.all("*", (req, res) => {
    res.status(404).send("<p>Nothing here, 404</p>");
});

const start = async () => {
    try {
        await connectMongoDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`server is listening on port ${PORT}...`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();
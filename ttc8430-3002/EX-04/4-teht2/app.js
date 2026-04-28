const express = require("express");
const connectMongoDB = require("./database/mongodb");
const { checkUsername } = require("./middleware/auth");
const app = express();
const albums = require("./routes/albums");
const PORT = 3000;
require("dotenv").config();

app.use(express.json());
app.use("/", checkUsername);
app.use("/albums", albums);

app.all("*", (req, res) => {
    res.status(404).send("<h1>Not found!</h1>");
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

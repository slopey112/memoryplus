const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database established successfully");
});

const usersRouter = require("./routes/users");
const facesRouter = require("./routes/faces");
app.use("/api/users", usersRouter);
app.use("/api/faces", facesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

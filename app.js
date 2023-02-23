const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const projectsRouter = require("./routes/Projects");
const userRouter = require("./routes/Users");
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODBURL);

app.use("/Projects", projectsRouter);
app.use("/Users", userRouter);

app.listen(process.env.PORT, () => console.log("Listening on port 3000"));

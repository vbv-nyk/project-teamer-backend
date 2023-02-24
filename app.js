const express = require("express");
const session = require('express-session')
const cors = require("cors");
const MongoStore = require('connect-mongo');
require("dotenv").config();
const mongoose = require("mongoose");
const projectsRouter = require("./routes/Projects");
const userRouter = require("./routes/Users");
const AuthRouter = require("./routes/Authentication");
const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODBURL);

app.use(session({
    secret: 'this is a really long string',
    store: MongoStore.create({
        mongoUrl: process.env.MONGODBURL
    }),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/Projects", projectsRouter);
app.use("/Users", userRouter);
app.use("/Auth", AuthRouter);

app.listen(process.env.PORT, () => console.log("Listening on port 3000"));

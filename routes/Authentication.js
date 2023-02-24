const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/User");
const bcrypt = require("bcryptjs");

const AuthRouter = express.Router();

AuthRouter.post("/Login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user)
        return res.send(JSON.stringify(false));

    const passCorrect = await bcrypt.compare(password, user.password);
    if (passCorrect) {
        req.session.loggedIn = true;
        req.session.username = user.username;
    }
    return res.send(JSON.stringify(req.session));
})

module.exports = AuthRouter;
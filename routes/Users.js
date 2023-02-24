const express = require("express");
const bcrypt = require("bcryptjs");
const userRouter = express.Router();
const User = require("../model/User")

userRouter.get("/:username", async (req, res) => {
    //Display a unique user
    const { username } = req.params;
    const user = await User.findOne({ username });
    return res.send(JSON.stringify(user));
});

userRouter.post("/", async (req, res) => {
    //Create a new user
    console.log(req.body);
    const { username, firstName, lastName, password, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = await User.create({ username, firstName, lastName, password: hashedPassword, email });
    res.send(JSON.stringify(user));
});

userRouter.delete("/:username", (req, res) => {
    //Remove a user from the database
});

userRouter.put("/:username", (req, res) => {
    //Update the details of a user

});

module.exports = userRouter;
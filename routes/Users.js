const userRouter = require("express").Router();

userRouter.get("/:username", (req, res) => {
    //Display a unique user

});

userRouter.post("/:username", (req, res) => {
    //Create a new user

});

userRouter.delete("/:username", (req, res) => {
    //Remove a user from the database

});

userRouter.put("/:username", (req, res) => {
    //Update the details of a user

});

module.exports = userRouter;
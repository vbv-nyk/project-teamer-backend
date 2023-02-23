const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema({
    username: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    projects: {
        partOf: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
        leaderOf: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
    },
    externalLinks: [{ type: String, trim: true }]
});

const User = mongoose.Model('User', UserSchema);
module.exports = User;

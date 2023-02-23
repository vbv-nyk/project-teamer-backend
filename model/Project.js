const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ProjectSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    thumbnailUrl: { type: String, trim: true },
    createdBy: { type: String, required: true },
    externalLinks: {
        twitter: { type: String, trim: true },
        website: { type: String, trim: true },
        discord: { type: String, trim: true },
        telegram: { type: String, trim: true },
    }
});

const Project = mongoose.Model('Project', ProjectSchema);
module.exports = Project;

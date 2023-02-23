const projectsRouter = require("express").Router();

projectsRouter.get("/", (req, res) => {
    //Display all projects here

});

projectsRouter.get("/:id", (req, res) => {
    //Get a project by it's ID

});

projectsRouter.post("/", (req, res) => {
    //Add a new project

});

projectsRouter.put("/:id", (req, res) => {
    //Update a project

});

projectsRouter.delete("/:id", (req, res) => {
    //Delete a project

});

module.exports = projectsRouter;

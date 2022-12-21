const {
  addStory,
  deleteStory,
  editStory,
  getAllStory,
  getOneStory,
} = require("../controller/story.controller");

const storiesRouter = require("express-promise-router")();

storiesRouter.route("/").get(getAllStory).post(addStory);
storiesRouter.route("/:id")
        .get(getOneStory)
        .put(editStory)
        .delete(deleteStory);
module.exports = {
  storiesRouter,
};

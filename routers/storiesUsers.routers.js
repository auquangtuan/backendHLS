const {
  createStories_Users,
  deleteStories_Users,
  editStories_Users,
  getAllStories_Users,
  getOneStories_Users,
} = require("../controller/storyUser.controller");

const storiesUsersRouter = require("express-promise-router")();

storiesUsersRouter
  .route("/")
  .get(getAllStories_Users)
  .post(createStories_Users);
storiesUsersRouter
  .route("/:id")
  .get(getOneStories_Users)
  .put(editStories_Users)
  .delete(deleteStories_Users);

module.exports = {
  storiesUsersRouter,
};

const {
  createActions,
  deleteActions,
  editActions,
  getAllActions,
  getOneActions,
} = require("../controller/action.controller");

const actionsRouter = require("express-promise-router")();

actionsRouter.route("/").get(getAllActions).post(createActions);
actionsRouter
  .route("/:id")
  .get(getOneActions)
  .put(editActions)
  .delete(deleteActions);

module.exports = {
  actionsRouter,
};

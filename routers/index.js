const express = require("express");
const { userRouter } = require("./users.routers");
const { storiesRouter } = require("./story.routers");
const { actionsRouter } = require("./action.routers");
const { roleRouter } = require("./role.routers");
const { storiesUsersRouter } = require("./storiesUsers.routers");

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/stories", storiesRouter);
rootRouter.use("/actions", actionsRouter);
rootRouter.use("/role", roleRouter);
rootRouter.use("/storiesUsers", storiesUsersRouter);

module.exports = {
  rootRouter,
};
const {
  login,
  getAllUsers,
  getOneUsers,
  register,
} = require("../controller/user.controller");

const userRouter = require("express-promise-router")();

userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getOneUsers);
userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
module.exports = {
  userRouter,
};

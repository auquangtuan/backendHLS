const {
  login,
  getAllUsers,
  getOneUsers,
  register,
  getUserActions,
  upadtePassword
} = require("../controller/user.controller");

const userRouter = require("express-promise-router")();

userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").get(getOneUsers);
userRouter.route("/changePass/:id").post(upadtePassword);
userRouter.route("/actions/:id").get(getUserActions);
userRouter.route("/register").post(register);
userRouter.route("/login").post(login);
module.exports = {
  userRouter,
};

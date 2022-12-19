const {
  createRole,
  deleteRole,
  editRole,
  getAllRole,
  getOneRole,
} = require("../controller/role.controller");

const roleRouter = require("express-promise-router")();

roleRouter.route("/")
        .get(getAllRole)
        .post(createRole);
roleRouter.route("/:id").get(getOneRole).put(editRole).delete(deleteRole);

module.exports = {
  roleRouter,
};

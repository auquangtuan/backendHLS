const { User, sequelize } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({
    where: {
      userName,
    },
  });
  if (user) {
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) {
      const asscess_Token = jwt.sign(
        {
          id: user.id,
          fullName: user.fullName,
          roleID: user.roleID,
        },
        "auquangtuan"
      );
      res.status(200).send({
        id: user.id,
        fullName: user.fullName,
        roleID: user.roleID,
        asscess_Token,
      });
    } else {
      res.status(500).send("Tài Khoản Hoặc Mật Khẩu Không Đúng");
    }
  } else {
    res.status(404).send("Tài Khoản Hoặc Mật Khẩu Không Đúng");
  }
};
const register = async (req, res) => {
  const { fullName, userName, password, roleID } = req.body;
  const user = await User.findOne({
    where: {
      userName,
    },
  });
  if (user) {
    res.status(404).send({ error: "Username Đã Tồn Tại" });
  } else {
    try {
      const salt = bcrypt.genSaltSync(3);
      const hashPassword = bcrypt.hashSync(password, salt);
      const newUser = await User.create({
        fullName,
        userName,
        password: hashPassword,
        roleID: roleID || 2,
      });
      res.status(201).send(newUser);
    } catch (error) {
      console.log(error);
    }
  }
};
const getAllUsers = async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).send(allUsers);
};
const getOneUsers = async (req, res) => {
  const { id } = req.params;
  const oneUsers = await User.findAll({
    where: {
      id,
    },
  });
  res.status(200).send(oneUsers);
};
const getUserActions = async (req, res) => {
  const { id } = req.params;
  const [resuilt] = await sequelize.query(
    `
    SELECT Stories_Users.userID,Stories_Users.storyID,Stories_Users.actionsID, Users.fullName, Users.userName FROM Stories_Users
    inner join Users on Stories_Users.userID = ${id} = Users.id
    `
  );
  res.status(200).send(resuilt);
};
const upadtePassword = async (req, res) => {
  const { id } = req.params
  const { passwordOLD, password } = req.body
  const PasswordUpdate = await User.findOne({
      where: {
          id,
      }
  })
  const isAuth = bcrypt.compareSync(passwordOLD, PasswordUpdate.password);
  if (isAuth) {
      const saltUpdate = bcrypt.genSaltSync(11);
      const hashPasswordUpdate = bcrypt.hashSync(password, saltUpdate)
      PasswordUpdate.password = hashPasswordUpdate;
      await PasswordUpdate.save()
      res.status(200).send(PasswordUpdate)
  } else {
      res.status(400).send({ flag: false })
  }

}


module.exports = {
  login,
  register,
  getAllUsers,
  getOneUsers,
  getUserActions,
  upadtePassword
};

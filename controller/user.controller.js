const { User } = require("../models");
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
module.exports = {
  login,
  register,
  getAllUsers,
  getOneUsers,
};

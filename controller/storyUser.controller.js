const { Stories_Users, User, Stories } = require("../models");

const getAllStories_Users = async (req, res) => {
  const allStories_Users = await Stories_Users.findAll({
    include: [
      {
        model: User,
      },
      {
        model: Stories,
      },
    ],
  });
  res.status(200).send(allStories_Users);
};
const getOneStories_Users = async (req, res) => {
  const { id } = req.params;
  const oneStories_Users = await Stories_Users.findOne({
    where: {
      id,
    },
    include: [
      {
        model: User,
      },
      {
        model: Stories,
      },
    ],
  });
  res.status(200).send(oneStories_Users);
};
const createStories_Users = async (req, res) => {
  const { userID, storyID, actionsID } = req.body;
  const addStories_Users = await Stories_Users.create({
    userID,
    storyID,
    actionsID,
  });
  res.status(201).send(addStories_Users);
};
const editStories_Users = async (req, res) => {
  const { id } = req.params;
  const { userID, storyID, actionsID } = req.body;
  const Stories_UsersEdit = await Stories_Users.findOne({
    where: {
      id,
    },
  });
  Stories_UsersEdit.userID = userID;
  Stories_UsersEdit.storyID = storyID;
  Stories_UsersEdit.actionsID = actionsID;
  await Stories_UsersEdit.save();
  res.status(201).send(Stories_UsersEdit);
};
const deleteStories_Users = async (req, res) => {
  const { id } = req.params;
  await Stories_Users.destroy({
    where: {
      id,
    },
  });
  res.status(200).send("Đã Xóa");
};
module.exports = {
  getAllStories_Users,
  createStories_Users,
  editStories_Users,
  deleteStories_Users,
  getOneStories_Users,
};

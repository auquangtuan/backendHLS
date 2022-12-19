const { Actions, User } = require("../models");

const getAllActions = async (req, res) => {
  const allActions = await Actions.findAll({
    include: [
      {
        model: User,
      },
    ],
  });
  res.status(200).send(allActions);
};
const getOneActions = async (req, res) => {
  const { id } = req.params;
  const oneActions = await Actions.findOne({
    where: {
      id,
    },
    include: [
      {
        model: User,
      },
    ],
  });
  res.status(200).send(oneActions);
};
const createActions = async (req, res) => {
  const { name } = req.body;
  const addActions = await Actions.create({ name });
  res.status(201).send(addActions);
};
const editActions = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const ActionsEdit = await Actions.findOne({
    where: {
      id,
    },
  });
  ActionsEdit.name = name;
  await ActionsEdit.save();
  res.status(201).send(ActionsEdit);
};
const deleteActions = async (req, res) => {
  const { id } = req.params;
  await Actions.destroy({
    where: {
      id,
    },
  });
  res.status(200).send("Đã Xóa");
};
module.exports = {
  getAllActions,
  createActions,
  editActions,
  deleteActions,
  getOneActions,
};

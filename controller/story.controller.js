const { Stories } = require("../models");

const getAllStory = async (req, res) => {
  const allStory = await Stories.findAll();
  res.status(200).send(allStory);
};
const getOneStory = async (req, res) => {
  const { id } = req.params;
  const oneStory = await Stories.findAll({
    where: {
      id,
    },
  });
  res.status(200).send(oneStory);
};
const addStory = async (req, res) => {
  const { story } = req.body;
  const addStory = await Stories.create({ story });
  res.status(201).send(addStory);
};
const editStory = async (req, res) => {
  const { id } = req.params;
  const { story } = req.body;
  const storyEdit = await Stories.findOne({
    where: {
      id,
    },
  });
  storyEdit.story = story;
  await storyEdit.save();
  res.status(201).send(storyEdit);
};
const deleteStory = async (req, res) => {
  const { id } = req.params;
  try {
    await Stories.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("Đã Xóa");
    
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  addStory,
  editStory,
  getAllStory,
  getOneStory,
  deleteStory,
};

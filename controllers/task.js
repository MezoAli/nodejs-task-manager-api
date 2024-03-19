const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getSingleTask = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ success: true, task: { id } });
};
const updateTask = (req, res) => {
  const name = req.body.name;
  res.status(200).json({ success: true, task: { name } });
};
const deleteTask = (req, res) => {
  res.status(200).json({ success: true, task: { name: "delete task" } });
};
const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
};

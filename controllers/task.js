const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.status(200).json({ success: true, tasks: [{ name: "get all tasks" }] });
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
  const task = await Task.create(req.body);
  res.status(200).json({ success: true, task });
};

module.exports = {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
};

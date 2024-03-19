const Task = require("../models/task");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ success: true, tasks });
});
const getSingleTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ msg: `no Task with id : ${id}` });
  }
  res.status(200).json({ success: true, task });
});
const updateTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedTask) {
    return res.status(404).json({ msg: `no Task with id : ${id}` });
  }
  res.status(201).json({ success: true, task: updatedTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    return res.status(404).json({ msg: `no Task with id : ${id}` });
  }
  res.status(200).json({ success: true, msg: "Deleted Successfully" });
});
const addTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(200).json({ success: true, task });
});

module.exports = {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
};

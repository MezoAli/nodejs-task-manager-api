const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getSingleTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.status(200).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body);
    res.status(201).json({ success: true, task: updatedTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ success: true, msg: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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

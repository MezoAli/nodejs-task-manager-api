const express = require("express");
const {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

const router = express.Router();

module.exports = router;

const express = require("express");
const {
  getAllTasks,
  getSingleTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", addTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;

const express = require("express");
const tasksRouter = require("./router/task");
const connectDB = require("./db/connectDB");
const notFound = require("./middleware/not-fond");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
// app.get("*", (req, res) => {
//   res.status(404).send("resource not found");
// });

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_DB);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

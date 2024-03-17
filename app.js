const express = require("express");
const tasksRouter = require("./router/task");

const app = express();
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasksRouter);

const port = 3000;

app.listen(port, () => console.log(`server is listening on port ${port}`));

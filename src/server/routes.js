const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const TodoModel = require("./models/todo");

// TODO: might be better to handle errors
/*
router.get("/Todos", asyncHandler( async (req,res) => {
    const allTodos = await TodoModel.find({}).exec();
    res.send(allTodos);
    })
);
*/

// ---------------------------------------
// http requests header should have >> Content-Type: application/json
router.get("/Todos", async function (req, res) {
  const allTodos = await TodoModel.find({}).exec();
  res.send(allTodos);
});

router.post("/Todo/create", async function (req, res) {
  const newtodo = new TodoModel({
    description: req.body.description,
    deadline: req.body.deadline,
    progress: req.body.progress,
  });

  await newtodo.save();
  res.send(newtodo);
});

router.put("/Todo/edit", async function (req, res) {
  // find Todo in db
  const todo = await TodoModel.findById(req.body.id).exec();
  if (todo === null) {
    const err = new Error("Todo not found");
    err.status = 404;
    return next(err);
  }

  // update the Todo
  todo.description = req.body.description;
  todo.deadline = req.body.deadline;
  todo.progress = req.body.progress;
  await todo.save();

  res.send(todo);
});

router.delete("/Todo/delete", async function (req, res) {
  // find and delete Todo
  const deleted = await TodoModel.findByIdAndDelete(req.body.id).exec();

  if (deleted === null) {
    const err = new Error("Todo not found");
    err.status = 404;
    return next(err);
  }

  res.status(200).send();
});

module.exports = router;

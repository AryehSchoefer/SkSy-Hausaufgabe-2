const express = require("express");
const router = express.Router();
const TodoModel = require("../models/todo");  //holt sich das mongodb schema für ein Todo objekt

//Testroutes 
router.get("/postTestTodo", function (req,res) {
    const awesome_Todo = new TodoModel({description:"hello world", deadline:"17.05.2023", progress:10})
    awesome_Todo.save();
    res.send(awesome_Todo);
});

//---------------------------------------
//Real Routes, WIP
router.get("/allTodos", function (req,res) {
    TodoModel.find({}).then(function (users){
        res.send(users);
    });
});

router.post("/addNewTodo", function (req,res) {
    console.log("add a todo");
});

router.put("/editTodo", function (req,res) {
    console.log("edit a todo");
});

router.delete("/deleteTodo", function (req,res) {
    console.log("delete a todo");
});



module.exports = router;
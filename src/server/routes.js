const express = require("express");
const asyncHandler = require("express-async-handler");

const router = express.Router();
const TodoModel = require("./models/todo");


router.get("/Todos", asyncHandler (async function (req, res) {
    const allTodos = await TodoModel.find({}).exec();

    if(!Array.isArray(allTodos) || !allTodos.length){
        throw new Error('There are no Todos');
    }
    else{
        res.send(allTodos);
    }

    })
);

router.post("/Todo/create", asyncHandler (async function (req, res) {

    const newtodo = new TodoModel({
        description: req.body.description,
        deadline: req.body.deadline,
        progress: req.body.progress,
    });

    await newtodo.save();
    res.send(newtodo);

    })
);

router.put("/Todo/edit", asyncHandler( async function (req, res) {

    const edittodo = await TodoModel.findById(req.body.id).exec();

    if (!edittodo) {
        throw new Error("cannot edit Todo. Todo not found");
    }
    else{
        edittodo.description = req.body.description;
        edittodo.deadline = req.body.deadline;
        edittodo.progress = req.body.progress;
        await edittodo.save();

        res.send(edittodo);
    }

    })
);

router.delete("/Todo/delete", asyncHandler (async function (req, res) {

    const deleted = await TodoModel.findByIdAndDelete(req.body._id).exec();
    
    if (!deleted) {
        throw new Error('cannot delete Todo. Todo not found');
    }
    else{
        res.sendStatus(200);
    }

    })
);

module.exports = router;

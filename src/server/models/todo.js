const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  description: { type: String, required: true, maxLength: 160 },
  deadline: { type: String, required: true },
  progress: { type: Number, required: true, min: 0, max: 100, default: 0 },
});

//maybe add virtual for url?

module.exports = mongoose.model("Todo", TodoSchema);

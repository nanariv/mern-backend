// Data Model for Tasks
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema for links
const TaskSchema = new Schema(
  {
    task: { type: String },
    status: { type: String },
    category: { type: String },
    dueDate: { type: Date },
    priority: { type: String },
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { collection: "Tasks" }
);

// Export model
module.exports = mongoose.model("Tasks", TaskSchema);

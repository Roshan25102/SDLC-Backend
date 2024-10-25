const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    priority: { type: Number, required: true }, // 1 = High, 2 = Moderate, 3 = Low
    checklist: [{ type: String }],
    dueDate: { type: Date, required: true },
    progress: {
      type: String,
      enum: ["Backlog", "To do", "In progress", "Done"],
      default: "To do",
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    assignedUsers: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        title: { type: String, required: true }, // User-specific title (modifiable)
        priority: { type: Number, required: true }, // User-specific priority
        checklist: [{ type: String }], // User-specific checklist
        dueDate: { type: Date, required: true }, // User-specific due date
        progress: {
          type: String,
          enum: ["Backlog", "To do", "In progress", "Done"],
          default: "To do",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);

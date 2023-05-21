import type { ITask } from "@/interfaces/task.interfaces";

import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    listId: {
        type: Schema.Types.ObjectId,
        ref: "List",
    },
    description: String,
    dueDate: Date,
    order: Number,
});

const TaskModel = mongoose.model<ITask>("Task", TaskSchema);

export default TaskModel;

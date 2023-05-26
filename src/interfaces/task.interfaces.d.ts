import type { Document, ObjectId } from "mongoose";

interface ITask extends Document {
    _id: ObjectId;
    description: string;
    dueDate: Date;
    listId: string;
    order: number;
}

interface ITaskCreateDTO {
    description: string;
    dueDate: Date;
    listId: ObjectId;
    order?: number;
}

interface ITaskUpdateDTO {
    description?: string;
    dueDate?: Date;
    order?: number;
}

interface ITaskMoveDTO {
    taskId: ObjectId;
    listId: ObjectId;
}

interface ITaskReorderDTO {
    order: number;
}

export { ITask, ITaskCreateDTO, ITaskUpdateDTO, ITaskMoveDTO, ITaskReorderDTO };

import type { Document, ObjectId } from "mongoose";

interface ITask extends Document {
    _id: ObjectId;
    description: string;
    due_date: Date;
    listId: string;
    order: number;
}

interface ITaskCreateDTO {
    description: string;
    due_date: Date;
    listId: ObjectId;
    order: number;
}

interface ITaskUpdateDTO {
    description?: string;
    due_date?: Date;
    listId?: ObjectId;
    order?: number;
}

export { ITask, ITaskCreateDTO, ITaskUpdateDTO };

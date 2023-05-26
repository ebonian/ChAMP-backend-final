import type { Document, ObjectId } from "mongoose";

interface IList extends Document {
    _id: ObjectId;
    title: string;
    order: number;
    tasks: ObjectId[];
}

interface IListCreateDTO {
    title: string;
    order: number;
}

interface IListUpdateDTO {
    title?: string;
    order?: number;
}

interface IListReorderDTO {
    order: number;
}

export { IList, IListCreateDTO, IListUpdateDTO, IListReorderDTO };

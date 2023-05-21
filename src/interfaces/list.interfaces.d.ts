import type { Document, ObjectId } from "mongoose";

interface IList extends Document {
    _id: ObjectId;
    title: string;
    order: number;
    tasks: ObjectId[];
}

interface IListDTO {
    title: string;
    order: number;
}

export { IList, IListDTO };

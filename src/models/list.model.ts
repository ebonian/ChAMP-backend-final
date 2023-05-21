import type { IList } from "@/interfaces/list.interfaces";

import mongoose, { Schema } from "mongoose";

const ListSchema = new Schema({
    title: String,
    order: Number,
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
});

const ListModel = mongoose.model<IList>("List", ListSchema);

export default ListModel;

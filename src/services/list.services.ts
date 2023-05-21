import type { ObjectId } from "mongoose";
import type { IList, IListCreateDTO } from "@/interfaces/list.interfaces";

import ListModel from "@/models/list.model";

const find = async () => {
    const lists = await ListModel.find()
        .then((lists) => lists)
        .catch(() => null);

    return lists;
};

const findById = async (listId: string) => {
    const list = await ListModel.findById(listId)
        .then((list) => list)
        .catch(() => null);

    return list;
};

const create = async (list: IListCreateDTO) => {
    const newList = await ListModel.create(list)
        .then((list) => list)
        .catch(() => null);

    return newList;
};

const update = async (listId: ObjectId | string, list: IListCreateDTO) => {
    const updatedList = await ListModel.findByIdAndUpdate(listId, list, {
        new: true,
    })
        .then((list) => list)
        .catch(() => null);

    return updatedList;
};

const addTaskToList = async (
    listId: ObjectId | string,
    taskId: ObjectId | string
) => {
    const updatedList = await ListModel.findByIdAndUpdate(
        listId,
        {
            $push: {
                tasks: taskId,
            },
        },
        {
            new: true,
        }
    )
        .then((list) => list)
        .catch((err) => {
            console.log(err);

            return null;
        });

    return updatedList;
};

export default {
    find,
    findById,
    create,
    update,
    addTaskToList,
};

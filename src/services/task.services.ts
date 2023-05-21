import type {
    ITaskCreateDTO,
    ITaskUpdateDTO,
} from "@/interfaces/task.interfaces";
import type { ObjectId } from "mongoose";

import TaskModel from "@/models/task.model";

const find = async () => {
    const tasks = await TaskModel.find()
        .then((tasks) => tasks)
        .catch(() => null);

    return tasks;
};

const findById = async (taskId: ObjectId | string) => {
    const task = await TaskModel.findById(taskId)
        .then((task) => task)
        .catch(() => null);

    return task;
};

const create = async (task: ITaskCreateDTO) => {
    const createdTask = await TaskModel.create(task)
        .then((task) => task)
        .catch(() => null);

    return createdTask;
};

const update = async (taskId: ObjectId | string, task: ITaskUpdateDTO) => {
    const updatedTask = await TaskModel.findByIdAndUpdate(taskId, task, {
        new: true,
    })
        .then((task) => task)
        .catch(() => null);

    return updatedTask;
};

const remove = async (taskId: ObjectId | string) => {
    const deletedTask = await TaskModel.findByIdAndRemove(taskId)
        .then((task) => task)
        .catch(() => null);

    return deletedTask;
};

export default {
    find,
    findById,
    create,
    update,
    remove,
};

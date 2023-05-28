import type { Request, Response } from "express";
import type {
    ITaskCreateDTO,
    ITaskMoveDTO,
    ITaskReorderDTO,
    ITaskUpdateDTO,
} from "@/interfaces/task.interfaces";

import listServices from "@/services/list.services";
import taskServices from "@/services/task.services";

const get = async (req: Request, res: Response) => {
    const tasks = await taskServices.find();

    if (!tasks) {
        return res.status(404).send("Task not found");
    }

    res.status(200).send(tasks);
};

const getById = async (req: Request, res: Response) => {
    const taskId = req.params.id;

    const task = await taskServices.findById(taskId);

    if (!task) {
        return res.status(404).send("Task not found");
    }

    return res.status(200).send(task);
};

const create = async (req: Request, res: Response) => {
    const { description, dueDate, listId } = res.locals.body as ITaskCreateDTO;

    const tasks = await taskServices.findByListId(listId);

    const createdTask = await taskServices.create({
        description,
        dueDate,
        listId,
        order: tasks ? tasks.length + 1 : 1,
    });

    if (!createdTask) {
        return res.status(400).send("Error creating task");
    }

    const updatedList = await listServices.addTaskToList(
        listId,
        createdTask._id
    );

    if (!updatedList) {
        await taskServices.remove(createdTask._id);

        return res.status(400).send("List not found");
    }

    return res.status(201).send(createdTask);
};

const update = async (req: Request, res: Response) => {
    const taskId = req.params.id;
    const taskUpdateBody = res.locals.body as ITaskUpdateDTO;

    const updatedTask = taskServices.update(taskId, taskUpdateBody);

    if (!updatedTask) {
        return res.status(400).send("Error updating task");
    }

    return res.status(200).send(updatedTask);
};

const remove = async (req: Request, res: Response) => {
    const taskId = req.params.id;

    const task = await taskServices.findById(taskId);

    if (!task) {
        return res.status(404).send("Task not found");
    }

    const updatedList = await listServices.removeTaskFromList(
        task.listId,
        task._id
    );

    if (!updatedList) {
        return res.status(400).send("Error removing task from list");
    }

    const deletedTask = taskServices.remove(taskId);

    if (!deletedTask) {
        return res.status(400).send("Error deleting task");
    }

    return res.status(200).send(deletedTask);
};

const move = async (req: Request, res: Response) => {
    const { taskId, listId } = res.locals.body as ITaskMoveDTO;

    const updatedTask = await taskServices.update(taskId, { listId });

    if (!updatedTask) {
        return res.status(400).send("Error updating task");
    }

    const updatedOldList = await listServices.removeTaskFromList(
        updatedTask.listId,
        updatedTask._id
    );

    if (!updatedOldList) {
        return res.status(400).send("Error removing task from old list");
    }

    const updatedNewList = await listServices.addTaskToList(
        updatedTask.listId,
        updatedTask._id
    );

    if (!updatedNewList) {
        return res.status(400).send("Error adding task to new list");
    }

    return res.status(200).send(updatedTask);
};

const reorder = async (req: Request, res: Response) => {
    const taskId = req.params.id;
    const taskReorderBody = res.locals.body as ITaskReorderDTO;

    const updatedTask = await taskServices.update(taskId, taskReorderBody);

    if (!updatedTask) {
        return res.status(400).send("Error reordering task");
    }

    return res.status(200).send(updatedTask);
};

export default {
    get,
    getById,
    create,
    update,
    remove,
    move,
    reorder,
};

import type { Request, Response } from "express";
import type {
    ITaskCreateDTO,
    ITaskUpdateDTO,
} from "@/interfaces/task.interfaces";

import listServices from "@/services/list.services";
import taskServices from "@/services/task.services";

const get = async (req: Request, res: Response) => {
    const tasks = await taskServices.find();

    res.status(200).send(tasks);
};

const create = async (req: Request, res: Response) => {
    const { description, due_date, listId, order } = res.locals
        .body as ITaskCreateDTO;

    const createdTask = await taskServices.create({
        description,
        due_date,
        listId,
        order,
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

export default {
    get,
    create,
    update,
    remove,
};

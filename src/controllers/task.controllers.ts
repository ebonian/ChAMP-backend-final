import { ITaskDTO } from "@/interfaces/task.interfaces";
import listServices from "@/services/list.services";
import taskServices from "@/services/task.services";
import type { Request, Response } from "express";

const get = async (req: Request, res: Response) => {
    const tasks = await taskServices.find();

    res.status(200).send(tasks);
};

const create = async (req: Request, res: Response) => {
    const { description, due_date, listId, order } = res.locals
        .body as ITaskDTO;

    const createdTask = await taskServices.create({
        description,
        due_date,
        listId,
        order,
    });

    if (!createdTask) {
        return res.status(400).send({
            message: "Error creating task",
        });
    }

    const updatedList = await listServices.addTaskToList(
        listId,
        createdTask._id
    );

    if (!updatedList) {
        return res.status(400).send({
            message: "List not found",
        });
    }

    return res.status(201).send(createdTask);
};

const update = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {};

export default {
    get,
    create,
    update,
    remove,
};

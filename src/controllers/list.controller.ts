import type {
    IListCreateDTO,
    IListReorderDTO,
} from "@/interfaces/list.interfaces";
import type { Request, Response } from "express";

import listServices from "@/services/list.services";
import taskServices from "@/services/task.services";

const get = async (req: Request, res: Response) => {
    const lists = await listServices.find();

    if (!lists) {
        return res.status(404).send("List not found");
    }

    res.status(200).send(lists);
};

const getById = async (req: Request, res: Response) => {
    const listId = req.params.id;

    const list = await listServices.findById(listId);

    if (!list) {
        return res.status(404).send("List not found");
    }

    res.status(200).send(list);
};

const create = async (req: Request, res: Response) => {
    const listBody = res.locals.body as IListCreateDTO;

    const createdList = await listServices.create(listBody);

    if (!createdList) {
        return res.status(400).send("Error creating list");
    }

    res.status(201).send(createdList);
};

const update = async (req: Request, res: Response) => {
    const listId = req.params.id;
    const listBody = res.locals.body as IListCreateDTO;

    const updatedList = await listServices.update(listId, listBody);

    if (!updatedList) {
        return res.status(400).send("Error updating list");
    }

    return res.status(200).send(updatedList);
};

const remove = async (req: Request, res: Response) => {
    const listId = req.params.id;

    const list = await listServices.findById(listId);

    if (!list) {
        return res.status(404).send("List not found");
    }

    list.tasks.forEach(async (taskId) => {
        await taskServices.remove(taskId);
    });

    const removedList = await listServices.remove(listId);

    if (!removedList) {
        return res.status(400).send("Error removing list");
    }

    return res.status(200).send(removedList);
};

const reorder = async (req: Request, res: Response) => {
    const listId = req.params.id;
    const listReorderBody = res.locals.body as IListReorderDTO;

    const updatedList = await listServices.update(listId, listReorderBody);

    if (!updatedList) {
        return res.status(400).send("Error reordering list");
    }

    return res.status(200).send(updatedList);
};

export default {
    get,
    getById,
    create,
    update,
    reorder,
    remove,
};

import { IListCreateDTO } from "@/interfaces/list.interfaces";
import type { Request, Response } from "express";

import listServices from "@/services/list.services";

const get = async (req: Request, res: Response) => {
    const lists = await listServices.find();

    if (!lists) {
        return res.status(404).send();
    }

    res.status(200).send(lists);
};

const create = async (req: Request, res: Response) => {
    const listBody = res.locals.body as IListCreateDTO;

    const createdList = await listServices.create(listBody);

    if (!createdList) {
        return res.status(400).send();
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

const move = async (req: Request, res: Response) => {};

const reorder = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {};

export default {
    get,
    create,
    update,
    move,
    reorder,
    remove,
};

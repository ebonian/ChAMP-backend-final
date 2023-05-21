import { IListDTO } from "@/interfaces/list.interfaces";
import listServices from "@/services/list.services";
import type { Request, Response } from "express";

const get = async (req: Request, res: Response) => {};

const create = async (req: Request, res: Response) => {
    const listBody = res.locals.body as IListDTO;

    const createdList = await listServices.create(listBody);

    if (!createdList) {
        return res.status(400).send();
    }

    res.status(201).send(createdList);
};

const update = async (req: Request, res: Response) => {};

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

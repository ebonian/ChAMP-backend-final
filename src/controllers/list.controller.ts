import { IListDTO } from "@/interfaces/list.interfaces";
import listServices from "@/services/list.services";
import type { Request, Response } from "express";

const get = async (req: Request, res: Response) => {};

const create = async (req: Request, res: Response) => {
    const { title, order } = res.locals.body as IListDTO;

    const task = await listServices.create({ title, order });

    res.status(201).send(task);
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

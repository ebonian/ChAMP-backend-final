import { IListDTO } from "@/interfaces/list.interfaces";
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

const create = async (list: { title: string; order: number }) => {
    const newList = await ListModel.create(list)
        .then((list) => list)
        .catch(() => null);

    return newList;
};

export default {
    find,
    findById,
    create,
};

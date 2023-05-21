import TaskModel from "@/models/task.model";

const find = async () => {
    const tasks = await TaskModel.find()
        .then((tasks) => tasks)
        .catch(() => null);

    return tasks;
};

const findById = async (taskId: string) => {
    const task = await TaskModel.findById(taskId)
        .then((task) => task)
        .catch(() => null);

    return task;
};

const create = async (task: any) => {
    const newTask = await TaskModel.create(task)
        .then((task) => task)
        .catch(() => null);

    return newTask;
};

export default {
    find,
    findById,
    create,
};

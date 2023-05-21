import Joi from "joi";

const createTaskSchema = Joi.object({
    listId: Joi.string().required(),
    description: Joi.string().required(),
    dueDate: Joi.date().required(),
    order: Joi.number().required(),
});

const updateTaskSchema = Joi.object({
    listId: Joi.string(),
    description: Joi.string(),
    dueDate: Joi.date(),
    order: Joi.number(),
});

const moveTaskSchema = Joi.object({
    taskId: Joi.string().required(),
    listId: Joi.string().required(),
});

export { createTaskSchema, updateTaskSchema, moveTaskSchema };

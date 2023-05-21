import Joi from "joi";

const createTaskSchema = Joi.object({
    listId: Joi.string().required(),
    description: Joi.string().required(),
    dueDate: Joi.date().required(),
    order: Joi.number().required(),
});

export { createTaskSchema };

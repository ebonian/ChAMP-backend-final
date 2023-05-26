import Joi from "joi";

const createListSchema = Joi.object({
    title: Joi.string().required(),
    // order: Joi.number().required(),
});

const updateListSchema = Joi.object({
    title: Joi.string(),
    // order: Joi.number(),
});

const reorderListSchema = Joi.object({
    order: Joi.number().required(),
});

export { createListSchema, updateListSchema, reorderListSchema };

import Joi from "joi";

const createListSchema = Joi.object({
    title: Joi.string().required(),
    order: Joi.number().required(),
});

const updateListSchema = Joi.object({
    title: Joi.string(),
    order: Joi.number(),
});

export { createListSchema, updateListSchema };

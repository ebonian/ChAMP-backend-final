import Joi from "joi";

const createListSchema = Joi.object({
    title: Joi.string().required(),
    order: Joi.number().required(),
});

const updatedListSchema = Joi.object({
    title: Joi.string(),
    order: Joi.number(),
});

export { createListSchema, updatedListSchema };

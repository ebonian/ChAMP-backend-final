import Joi from "joi";

const createListSchema = Joi.object({
    title: Joi.string().required(),
    order: Joi.number().required(),
});

export { createListSchema };

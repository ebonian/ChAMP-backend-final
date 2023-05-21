import Joi from "joi";

const createListSchemaSchema = Joi.object({
    title: Joi.string().required(),
    order: Joi.number().required(),
});

export { createListSchemaSchema };

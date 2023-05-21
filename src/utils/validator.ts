import type { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validate =
    (schema: Joi.ObjectSchema<any>) =>
    (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = schema.validate(req.body);

        if (error) {
            res.status(400).send({ success: false, error: error.message });
        } else {
            res.locals.body = value;
            next();
        }
    };

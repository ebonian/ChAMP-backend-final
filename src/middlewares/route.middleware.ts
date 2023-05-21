import type { NextFunction, Request, Response } from "express";

export const genericRoute = (fn: any) => {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            res.locals.body = req.body;
            fn(req, res, next);
        } catch (error) {
            res.status(500).send({ success: false, message: error });
        }
    };
};

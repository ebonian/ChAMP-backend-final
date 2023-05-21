import express from "express";

import listController from "@/controllers/list.controller";
import { genericRoute } from "@/middlewares/route.middleware";
import { validate } from "@/utils/validator";
import { createListSchemaSchema } from "@/schemas/list.schemas";

const router = express.Router();

router.get("/", genericRoute(listController.get));

router.post(
    "/",
    validate(createListSchemaSchema),
    genericRoute(listController.create)
);

export default router;

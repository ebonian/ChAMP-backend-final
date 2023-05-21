import express from "express";

import listController from "@/controllers/list.controller";
import { genericRoute } from "@/middlewares/route.middleware";
import { validate } from "@/utils/validator";
import { createListSchema } from "@/schemas/list.schemas";

const router = express.Router();

router.get("/", genericRoute(listController.get));

router.post(
    "/",
    validate(createListSchema),
    genericRoute(listController.create)
);

export default router;

import express from "express";

import { genericRoute } from "@/middlewares/route.middleware";
import taskControllers from "@/controllers/task.controllers";
import { validate } from "@/utils/validator";
import { createTaskSchema } from "@/schemas/task.schemas";

const router = express.Router();

router.get("/", genericRoute(taskControllers.get));

router.post(
    "/",
    validate(createTaskSchema),
    genericRoute(taskControllers.create)
);

router.put("/", genericRoute(taskControllers.update));

router.delete("/", genericRoute(taskControllers.remove));

export default router;

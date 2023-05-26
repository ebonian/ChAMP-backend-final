import express from "express";
import taskControllers from "@/controllers/task.controllers";
import { genericRoute } from "@/middlewares/route.middleware";
import {
    createTaskSchema,
    moveTaskSchema,
    reorderTaskSchema,
    updateTaskSchema,
} from "@/schemas/task.schemas";
import { validate } from "@/utils/validator";

const router = express.Router();

router.get("/", genericRoute(taskControllers.get));

router.get("/:id", genericRoute(taskControllers.getById));

router.post(
    "/",
    validate(createTaskSchema),
    genericRoute(taskControllers.create)
);

router.put(
    "/:id",
    validate(updateTaskSchema),
    genericRoute(taskControllers.update)
);

router.delete("/:id", genericRoute(taskControllers.remove));

router.put(
    "/move",
    validate(moveTaskSchema),
    genericRoute(taskControllers.move)
);

router.put(
    "/reorder",
    validate(reorderTaskSchema),
    genericRoute(taskControllers.reorder)
);

export default router;

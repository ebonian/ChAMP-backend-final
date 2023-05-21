import express from "express";
import listController from "@/controllers/list.controller";
import { genericRoute } from "@/middlewares/route.middleware";
import { validate } from "@/utils/validator";
import { createListSchema, updatedListSchema } from "@/schemas/list.schemas";

const router = express.Router();

router.get("/", genericRoute(listController.get));

router.get("/:id", genericRoute(listController.getById));

router.post(
    "/",
    validate(createListSchema),
    genericRoute(listController.create)
);

router.put(
    "/:id",
    validate(updatedListSchema),
    genericRoute(listController.update)
);

router.delete("/:id", genericRoute(listController.remove));

router.put("/reorder", genericRoute(listController.reorder));

export default router;

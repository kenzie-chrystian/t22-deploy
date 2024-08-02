import { Router } from "express";
import { BandController } from "../controllers/band.controller";
import { validateBody } from "../middlewares/body.validator";
import { bandCreateSchema, bandUpdateSchema } from "../schemas/band.schemas";

export const bandRouter = Router();
const bandController = new BandController();

bandRouter.get("", bandController.list);
bandRouter.post("", validateBody(bandCreateSchema), bandController.create);
bandRouter.get("/:id", bandController.findOne);
bandRouter.patch(
  "/:id",
  validateBody(bandUpdateSchema),
  bandController.partialUpdate
);
bandRouter.delete("/:id", bandController.delete);

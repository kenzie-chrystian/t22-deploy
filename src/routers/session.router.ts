import { Router } from "express";
import { SessionController } from "../controllers/session.controller";
import { validateBody } from "../middlewares/body.validator";
import { sessionCreateSchema } from "../schemas/session.schemas";

export const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post(
  "",
  validateBody(sessionCreateSchema),
  sessionController.login
);

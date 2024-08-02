import { Router } from "express";
import { MusicController } from "../controllers/music.controller";
import { validateBody } from "../middlewares/body.validator";
import { musicCreateSchema } from "../schemas/music.schemas";

export const musicRouter = Router();
const musicController = new MusicController();

musicRouter.get("", musicController.list);
musicRouter.post("", validateBody(musicCreateSchema), musicController.create);

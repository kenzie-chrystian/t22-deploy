import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { validateBody } from "../middlewares/body.validator";
import { userCreateSchema } from "../schemas/user.schemas";

export const userRouter = Router();
const userController = new UserController();

userRouter.get("", userController.list);
userRouter.post("", validateBody(userCreateSchema), userController.create);

import { z } from "zod";
import { userCreateSchema, userSchema } from "../schemas/user.schemas";

export type User = z.infer<typeof userSchema>;
export type UserCreate = z.infer<typeof userCreateSchema>;

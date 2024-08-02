import { z } from "zod";

export const userSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(50),
  email: z.string().email(),
  password: z.string().min(1).max(255),
});

export const userCreateSchema = userSchema.omit({ id: true });
export const userWithoutPasswordSchema = userSchema.omit({ password: true });

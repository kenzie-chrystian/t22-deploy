import { z } from "zod";

export const bandSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(50),
  formationYear: z.number().int().positive(),
});

export const bandCreateSchema = bandSchema.omit({ id: true });
export const bandUpdateSchema = bandCreateSchema.partial();

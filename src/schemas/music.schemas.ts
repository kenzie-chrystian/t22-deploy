import { z } from "zod";

export const musicSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().max(50),
  length: z.number().int().positive(),
  bandId: z.number().int().positive(),
});

export const musicCreateSchema = musicSchema.omit({ id: true });

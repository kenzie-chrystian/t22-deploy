import { z } from "zod";
import {
  bandCreateSchema,
  bandSchema,
  bandUpdateSchema,
} from "../schemas/band.schemas";

export type Band = z.infer<typeof bandSchema>;
export type BandCreate = z.infer<typeof bandCreateSchema>;
export type BandUpdate = z.infer<typeof bandUpdateSchema>;

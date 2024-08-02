import { z } from "zod";
import { musicCreateSchema, musicSchema } from "../schemas/music.schemas";

export type Music = z.infer<typeof musicSchema>;
export type MusicCreate = z.infer<typeof musicCreateSchema>;

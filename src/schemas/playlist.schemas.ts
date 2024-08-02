import { z } from "zod";

export const playlistSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().max(50),
  userId: z.number().int().positive(),
});

export const playlistCreateSchema = playlistSchema.omit({
  id: true,
  userId: true,
});

export const playlistAddMusicSchema = z.object({
  musicId: z.number().int().positive(),
});

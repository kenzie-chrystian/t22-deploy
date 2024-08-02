import { z } from "zod";
import {
  playlistCreateSchema,
  playlistSchema,
} from "../schemas/playlist.schemas";

export type Playlist = z.infer<typeof playlistSchema>;
export type PlaylistCreate = z.infer<typeof playlistCreateSchema>;

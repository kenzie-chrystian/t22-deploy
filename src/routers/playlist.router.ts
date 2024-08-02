import { Router } from "express";
import { validateBody, isAuthenticated } from "../middlewares";
import {
  playlistAddMusicSchema,
  playlistCreateSchema,
} from "../schemas/playlist.schemas";
import { PlaylistController } from "../controllers/playlist.controller";
import { isPlaylistOwner } from "../middlewares/playlist.middleware";

export const playlistRouter = Router();
const playlistController = new PlaylistController();

playlistRouter.get("", playlistController.list);

playlistRouter.post(
  "",
  isAuthenticated,
  validateBody(playlistCreateSchema),
  playlistController.create
);

playlistRouter.get("/:id", playlistController.findOne);

playlistRouter.post(
  "/:id/musics",
  isAuthenticated,
  isPlaylistOwner,
  validateBody(playlistAddMusicSchema),
  playlistController.addMusic
);

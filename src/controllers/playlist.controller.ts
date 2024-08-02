import { Request, Response } from "express";
import { PlaylistService } from "../services/playlist.service";

export class PlaylistController {
  private playlistService = new PlaylistService();

  list = async (req: Request, res: Response) => {
    const playlists = await this.playlistService.list();

    return res.json(playlists);
  };

  create = async (req: Request, res: Response) => {
    const userId = res.locals.userId;

    const playlist = await this.playlistService.create(req.body, userId);

    return res.status(201).json(playlist);
  };

  findOne = async (req: Request, res: Response) => {
    const band = await this.playlistService.findOne(Number(req.params.id));

    return res.json(band);
  };

  addMusic = async (req: Request, res: Response) => {
    const playlistId = req.params.id;
    const { musicId } = req.body;

    const playlist = await this.playlistService.addMusic(
      Number(playlistId),
      musicId
    );

    return res.status(200).json(playlist);
  };
}

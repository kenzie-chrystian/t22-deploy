import { Request, Response } from "express";
import { MusicService } from "../services/music.service";

export class MusicController {
  private musicService = new MusicService();

  list = async (req: Request, res: Response) => {
    const musics = await this.musicService.list();

    return res.json(musics);
  };

  create = async (req: Request, res: Response) => {
    const music = await this.musicService.create(req.body);

    return res.status(201).json(music);
  };
}

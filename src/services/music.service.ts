import { prisma } from "../database/prisma.client";
import { ApiError } from "../errors/api.errors";
import { MusicCreate } from "../interfaces/music.interfaces";
import { BandService } from "./band.service";

export class MusicService {
  private bandService = new BandService();

  list = async () => {
    const musics = await prisma.music.findMany();

    return musics;
  };

  create = async (payload: MusicCreate) => {
    await this.bandService.findOne(payload.bandId);

    const music = await prisma.music.create({ data: payload });

    return music;
  };

  findOne = async (id: number) => {
    const music = await prisma.music.findUnique({ where: { id: id } });

    if (!music) {
      throw new ApiError("Music not found", 404);
    }

    return music;
  };
}

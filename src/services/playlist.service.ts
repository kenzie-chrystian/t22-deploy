import { prisma } from "../database/prisma.client";
import { ApiError } from "../errors/api.errors";
import { PlaylistCreate } from "../interfaces/playlist.interfaces";
import { MusicService } from "./music.service";

export class PlaylistService {
  private musicService = new MusicService();

  list = async () => {
    const playlists = await prisma.playlist.findMany();

    return playlists;
  };

  create = async (payload: PlaylistCreate, userId: number) => {
    const playlist = await prisma.playlist.create({
      data: { ...payload, userId },
    });

    return playlist;
  };

  findOne = async (id: number) => {
    const playlist = await prisma.playlist.findUnique({
      where: { id: id },
      include: { musics: true },
    });

    if (!playlist) {
      throw new ApiError("Playlist not found", 404);
    }

    return playlist;
  };

  addMusic = async (playlistId: number, musicId: number) => {
    const playlist = await prisma.playlist.findUnique({
      where: { id: playlistId },
    });

    if (!playlist) {
      throw new ApiError("Playlist not found", 404);
    }

    await this.musicService.findOne(musicId);

    const updatedPlaylist = await prisma.playlist.update({
      where: { id: playlistId },
      data: { musics: { connect: { id: musicId } } },
      include: { musics: true },
    });

    return updatedPlaylist;
  };
}

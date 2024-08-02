import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/api.errors";
import jwt from "jsonwebtoken";
import { prisma } from "../database/prisma.client";
import { PlaylistService } from "../services/playlist.service";

export async function isPlaylistOwner(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const userId = res.locals.userId;
  const playlistId = Number(req.params.id);

  const playlistService = new PlaylistService();

  const playlist = await playlistService.findOne(playlistId);

  if (userId !== playlist.userId) {
    // 403 - Forbidden
    return res.status(403).json({ error: "You cannot perform this action" });
  }

  return next();
}

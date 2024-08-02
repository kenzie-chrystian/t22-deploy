import { prisma } from "../database/prisma.client";
import { ApiError } from "../errors/api.errors";
import { BandCreate, BandUpdate } from "../interfaces/band.interfaces";

export class BandService {
  list = async () => {
    const bands = await prisma.band.findMany();

    return bands;
  };

  create = async (payload: BandCreate) => {
    const band = await prisma.band.create({ data: payload });

    return band;
  };

  findOne = async (id: number) => {
    const band = await prisma.band.findUnique({ where: { id: id } });

    if (!band) {
      throw new ApiError("Band not found", 404);
    }

    return band;
  };

  partialUpdate = async (id: number, payload: BandUpdate) => {
    const bandExists = (await prisma.band.count({ where: { id } })) !== 0;

    if (!bandExists) {
      throw new ApiError("Band not found", 404);
    }

    return await prisma.band.update({ where: { id }, data: payload });
  };

  delete = async (id: number) => {
    const bandExists = (await prisma.band.count({ where: { id } })) !== 0;

    if (!bandExists) {
      throw new ApiError("Band not found", 404);
    }

    await prisma.band.delete({ where: { id } });
  };
}

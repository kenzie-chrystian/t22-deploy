import { prisma } from "../database/prisma.client";
import { ApiError } from "../errors/api.errors";
import { UserCreate } from "../interfaces/user.interfaces";
import * as bcryptjs from "bcryptjs";
import { userWithoutPasswordSchema } from "../schemas/user.schemas";

export class UserService {
  list = async () => {
    const users = await prisma.user.findMany();

    return users;
  };

  create = async (payload: UserCreate) => {
    payload.password = await bcryptjs.hash(payload.password, 10);
    const user = await prisma.user.create({ data: payload });

    return userWithoutPasswordSchema.parse(user);
  };

  findOne = async (id: number) => {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new ApiError("User not found", 404);
    }

    return userWithoutPasswordSchema.parse(user);
  };
}

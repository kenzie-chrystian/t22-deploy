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
    // v1. Hasheando a senha
    // Hashing é um processo IRREVERSIVEL.
    payload.password = await bcryptjs.hash(payload.password, 10);
    const user = await prisma.user.create({ data: payload });

    // removendo password do retorno
    // forma 1 (js puro)
    // const { password, ...userWithoutPassword } = user;
    // return userWithoutPassword;

    return userWithoutPasswordSchema.parse(user);
  };
}

import { prisma } from "../database/prisma.client";
import { ApiError } from "../errors/api.errors";
import { UserCreate } from "../interfaces/user.interfaces";
import * as bcryptjs from "bcryptjs";
import { sign } from "jsonwebtoken";

export class SessionService {
  login = async (payload: UserCreate) => {
    // 1. Verificar se o email corresponde a um usuario cadastrado
    const user = await prisma.user.findUnique({
      where: { email: payload.email },
    });

    // 401 - UNAUTHORIZED
    if (!user) {
      throw new ApiError("Invalid credentials", 401);
    }

    // 2. Verificar se a senha está correta
    const passwordIsValid = await bcryptjs.compare(
      payload.password,
      user.password
    );

    if (!passwordIsValid) {
      throw new ApiError("Invalid credentials", 401);
    }

    // 3. Retornar um token JWT para o usuario
    const secret = process.env.JWT_SECRET as string;
    const token = sign({ name: user.name }, secret, {
      expiresIn: "1h",
      subject: String(user.id),
    });

    return token;
  };
}

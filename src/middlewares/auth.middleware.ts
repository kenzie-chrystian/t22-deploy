import { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/api.errors";
import jwt from "jsonwebtoken";

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new ApiError("Missing bearer token", 401);
  }

  const [type, token] = authorization.split(" ");

  const decodedJwtPayload = jwt.verify(token, process.env.JWT_SECRET as string);

  res.locals.userId = Number(decodedJwtPayload.sub);

  return next();
}

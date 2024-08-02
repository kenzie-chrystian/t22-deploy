import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ApiError } from "./api.errors";
import { JsonWebTokenError } from "jsonwebtoken";

export function handleGlobalErrors(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    return res.status(400).json({ error: error.errors });
  }

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ error: error.message });
  }

  if (error instanceof JsonWebTokenError) {
    return res.status(401).json({ error: error.message });
  }

  console.log(error);
  return res.status(500).json({ error: "Internal Server Error" });
}

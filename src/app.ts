import express from "express";
import "express-async-errors";
import cors from "cors";

import { handleGlobalErrors } from "./errors/handle.errors";
import {
  bandRouter,
  musicRouter,
  playlistRouter,
  userRouter,
  sessionRouter,
} from "./routers";

const app = express();
// CORS - Cross Origin Resource Sharing - Whitelist
app.use(cors());
app.use(express.json());

app.use("/bands", bandRouter);
app.use("/musics", musicRouter);
app.use("/playlists", playlistRouter);
app.use("/users", userRouter);
app.use("/login", sessionRouter);

app.use(handleGlobalErrors);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

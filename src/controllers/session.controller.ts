import { Request, Response } from "express";
import { SessionService } from "../services/session.service";

export class SessionController {
  private sessionService = new SessionService();

  login = async (req: Request, res: Response) => {
    const token = await this.sessionService.login(req.body);

    return res.status(200).json({ access_token: token });
  };
}

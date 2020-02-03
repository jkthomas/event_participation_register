import { Request, Response } from "express";
import { RegisterService } from "../Services/RegisterService";

export namespace RegisterController {
  export async function getParticipants(req: Request, res: Response) {
    res.send({ placeholder: "placeholder" });
  }

  export async function registerParticipant(
    req: Request,
    res: Response
  ): Promise<void> {
    const participant = await RegisterService.registerParticipant(req.body);
    //TODO: Add error handling
    res.send(participant);
  }
}

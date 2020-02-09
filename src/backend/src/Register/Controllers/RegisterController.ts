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
    const result = await RegisterService.registerParticipant(req.body);
    if (result.isError) {
      res.status(400).send({ errors: result.errors });
    } else {
      res.status(201).send(result.data);
    }
  }
}

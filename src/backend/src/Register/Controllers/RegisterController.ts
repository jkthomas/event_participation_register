import { Express, Request, Response } from "express";
import { Db, MongoClient } from "mongodb";
import Participant from "../Models/Participant";

export namespace RegisterController {
  export async function getParticipants(req: Request, res: Response) {
    res.send({ placeholder: "placeholder" });
  }

  export async function registerParticipant(req: Request, res: Response) {
    let participant = new Participant(req.body);
    participant.save((err, participant) => {
      if (err) {
        res.send(err);
      }
      res.json(participant);
    });
  }
}

import { Express, Request, Response } from "express";
import { Db, MongoClient } from "mongodb";
import Participant from "../Models/Participant";

export namespace RegisterService {
  export async function registerParticipant(
    participant: Object
  ): Promise<{ code: Number; test: string }> {
    //TODO: Add result handling
    let result = { code: 6, test: "test" };

    try {
      let participantModel = new Participant(participant);
      await participantModel.save((err, participant) => {
        if (err) {
          result.test = err.errors.email.message;
        } else {
          result.test = participant.toJSON();
        }
      });
    } catch (e) {
      result.test = e.message;
    }

    return result;
  }
}

import Participant from "../Models/Participant";
import { RegisterValidator } from "../../Lib/Validation/RegisterValidator";
import { Result } from "../../Lib/App/Result";

export namespace RegisterService {
  export async function registerParticipant(
    participant: Object
  ): Promise<Result> {
    let result = new Result();

    try {
      let participantModel = new Participant(participant);
      await participantModel.save((err, participant) => {
        if (err) {
          result.isError = true;
          result.errors = RegisterValidator.addErrors(err);
        } else {
          console.log(participant);
          //TODO: Data is not returned
          result.data = participant.toString();
        }
      });
    } catch (e) {
      result.isError = true;
      //TODO: Fix
      // result.errors = RegisterValidator.addErrors(err);
    }

    return result;
  }
}

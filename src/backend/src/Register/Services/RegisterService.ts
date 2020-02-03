import Participant from "../Models/Participant";
import { RegisterValidator } from "../../Lib/Validation/RegisterValidator";
import { Result } from "../../Lib/App/Result";

export namespace RegisterService {
  export async function registerParticipant(
    participant: Object
  ): Promise<Result> {
    let result = new Result();
    let participantModel = new Participant(participant);
    await participantModel
      .save()
      .then(data => {
        result.data = data.toJSON();
      })
      .catch(e => {
        result.isError = true;
        result.errors.push(e.message);
        result.errors = RegisterValidator.addErrors(e);
      });

    return result;
  }
}

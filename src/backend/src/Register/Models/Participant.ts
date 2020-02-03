import { Schema, Document, model } from "mongoose";

interface IParticipant extends Document {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
}

const ParticipantSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email pattern."
    ]
  },
  eventDate: { type: Date, required: true }
});

export default model<IParticipant>("Participant", ParticipantSchema);

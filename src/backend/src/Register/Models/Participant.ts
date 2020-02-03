import { Schema, Document, model } from "mongoose";

interface IParticipant extends Document {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
}

const ParticipantSchema = new Schema({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email pattern."
    ]
  },
  eventDate: { type: Date, required: [true, "Event date is required"] }
});

export default model<IParticipant>("Participant", ParticipantSchema);

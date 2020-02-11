import { Schema, Document, model } from "mongoose";

interface IParticipant extends Document {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
}

const ParticipantSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    maxlength: [32, "First name can't have more than 32 characters"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    maxlength: [32, "Last name can't have more than 32 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    maxlength: [32, "Email can't have more than 32 characters"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Invalid email pattern."
    ]
  },
  eventDate: { type: Date, required: [true, "Event date is required"] }
});

export default model<IParticipant>("Participant", ParticipantSchema);

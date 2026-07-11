import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const leadSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    website: { type: String, trim: true, default: "" },
    details: { type: String, required: true, trim: true },
    service: { type: String, trim: true, default: "" },
    budget: { type: String, trim: true, default: "" },
    source: { type: String, default: "website-modal" },
  },
  { timestamps: true }
);

export type LeadDoc = InferSchemaType<typeof leadSchema>;

// Reuse an already-compiled model across warm invocations (avoids OverwriteModelError).
const Lead = (models.Lead as Model<LeadDoc>) || model<LeadDoc>("Lead", leadSchema);

export default Lead;

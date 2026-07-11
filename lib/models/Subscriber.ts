import { Schema, model, models, type InferSchemaType, type Model } from "mongoose";

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export type SubscriberDoc = InferSchemaType<typeof subscriberSchema>;

const Subscriber =
  (models.Subscriber as Model<SubscriberDoc>) ||
  model<SubscriberDoc>("Subscriber", subscriberSchema);

export default Subscriber;

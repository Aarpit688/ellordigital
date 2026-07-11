import mongoose from "mongoose";

// Serverless functions freeze between invocations. Cache the connection on the
// global object so warm invocations reuse one socket instead of opening a new
// connection on every request (which would exhaust MongoDB's connection limit).
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalForMongoose = global as unknown as { _mongoose?: MongooseCache };

const cached: MongooseCache =
  globalForMongoose._mongoose ?? { conn: null, promise: null };
globalForMongoose._mongoose = cached;

export default async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        "MONGODB_URI is not set. Add it to .env.local locally, or to the Vercel project's Environment Variables."
      );
    }
    mongoose.set("strictQuery", true);
    // bufferCommands:false so queries fail fast instead of hanging when the
    // connection is not ready — better behavior inside short-lived functions.
    cached.promise = mongoose.connect(uri, { bufferCommands: false });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

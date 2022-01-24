// Connect to MongoDB
import mongoose from "mongoose";
import dotenv from "dotenv";

// Import environnement variables
dotenv.config();

export function connect() {
  return mongoose.connect(
    `${process.env.MONGO_PROTO}://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/${process.env.MONGO_DATABASE}`
  );
}

export function getClient() {
  return mongoose;
}

export function close() {
  return mongoose.connection.close();
}

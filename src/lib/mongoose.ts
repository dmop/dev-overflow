import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    console.log("MISSING MONGODB_URL ENV VAR");
    return;
  }

  if (isConnected) {
    console.log("MONGODB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "dev-overflow",
    });

    isConnected = true;
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

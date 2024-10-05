import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URL = `mongodb+srv://abhishekthakur2904:HmmvYRjFKxI26gPL@file-sharing-wd.pasbcau.mongodb.net/?retryWrites=true&w=majority&appName=File-sharing-WD`;

  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("error while connecting with the database", error.message);
  }
};

export default DBConnection;

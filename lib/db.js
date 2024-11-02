// lib/db.js
import mongoose from 'mongoose';

const dbstring = 'mongodb+srv://gui24xrdev:2485javiersolis@cluster0.a6zgcio.mongodb.net/nextprueba?retryWrites=true&w=majority&appName=Cluster0'

let isConnected;

const connectDB = async () => {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(dbstring, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error('Database connection failed');
  }
};

export default connectDB;

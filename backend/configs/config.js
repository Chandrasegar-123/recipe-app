import mongoose from "mongoose";
export const PORT = 8080
export const mongoDBURL = "mongodb+srv://chandrasegar:0nqUX4KvZX31YreB@cluster0.3ijsndp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURL);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error("error.message");
    process.exit(1);
  }
};

export default connectDB;
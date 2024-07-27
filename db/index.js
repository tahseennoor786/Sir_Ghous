import mongoose from "mongoose";
import "dotenv/config";
const url = "mongodb://localhost:27017/ghous"

mongoose.connect(url);
export default mongoose;


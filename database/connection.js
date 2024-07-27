import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUri = process.env.DB_URI;

const connectToDB = () => {
    mongoose.connect(dbUri)
    .then(() => {
        console.log("Connected to TestDB database!");
    })
    .catch((err) => {
        console.log("Error connecting to database");
        console.error(err);
    })
}

export default connectToDB;

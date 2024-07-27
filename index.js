import express from "express";
import routes from "./routes/route.js";
import databaseConnection from "./database/connection.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

// middleware
app.use(express.json());
app.use("/", routes);

// DB connection
databaseConnection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



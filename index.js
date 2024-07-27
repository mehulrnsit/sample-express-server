const express = require('express');
const routes = require("./routes/route");
const app = express();
const databaseConnection = require('./database/connection')
require("dotenv").config();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use("/", routes);

// DB connection
databaseConnection();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



//REQUIREMENTS
const express = require("express");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const userRoutes = require("./routes/user.routes");

const cors = require("cors");
const https = require("https");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT;

//CONNECTION WITH MONGODB

//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use("/user", userRoutes);

//SERVER
app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});

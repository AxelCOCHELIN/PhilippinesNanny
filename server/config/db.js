const mongoose = require("mongoose");
const uri = process.env.ATLAS_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB!"))
  .catch((err) => console.log("Failed to connect to MongoDB!", err));

exports.mongoose;

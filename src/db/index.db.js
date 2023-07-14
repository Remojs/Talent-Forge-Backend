const mongoose = require("mongoose");
require("dotenv").config();

//mongo db connection
//viva cristo rey

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(`Could not connect to database ${err}`));

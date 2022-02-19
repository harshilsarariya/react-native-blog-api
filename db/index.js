const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db connection failed: ", err.message || err));

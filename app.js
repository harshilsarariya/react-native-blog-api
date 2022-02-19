require("express-async-errors");
require("./db");
const express = require("express");
require("dotenv").config();
const postRouter = require("./routers/post");
// const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
// app.use(morgan("dev"));
app.use("/api/post", postRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Port is listining on " + PORT);
});

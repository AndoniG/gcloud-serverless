const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/ulfix-db";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.on("error", () => {
  console.log("> Error on DB connection");
});

db.once("open", () => {
  console.log("> Successfully connected to DB");
});

module.exports = mongoose;

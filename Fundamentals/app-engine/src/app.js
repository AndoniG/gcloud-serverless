const compression = require("compression");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
require("./config/database");

function settings() {
  app.set("port", process.env.PORT || 3000);
  process.env.TZ = "America/Mexico_City";
}

function middlewares() {
  app.use("/", express.static(path.join(__dirname, "dist")));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(compression());
  app.use(helmet());
}

function routes() {
  app.use("/auth", require("./routes/session.routes"));
  app.use("/api/users", require("./routes/user.routes"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, `./dist/index.html`));
  });
}

function main() {
  settings();
  middlewares();
  routes();
}

main();

module.exports = app;

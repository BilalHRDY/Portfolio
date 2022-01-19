import express from "express";
import router from "./routes.js";
import path from "path";

const app = express();
const port = 3000;

const __dirname = path.resolve();

// Connect to database
import { connect } from "./db.connexion.js";

connect()
  .then(() => {
    console.info("mongodb - connected to database");

    app
      .listen(port, () => {
        console.log(`express listening at http://localhost:${port}`);
      })
      .on("error", function () {
        console.error("express - unable to start server on " + ip + ":" + port);
      });
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", router);

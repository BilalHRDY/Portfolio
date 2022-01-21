import express from "express";
import router from "./routes.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
app.use(express.json());

const port = 3000;

app
  .listen(port, () => {
    console.log(`express listening at http://localhost:${port}`);
  })
  .on("error", function () {
    console.error("express - unable to start server on " + ip + ":" + port);
  });

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/contact", router);

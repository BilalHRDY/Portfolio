import express from "express";
import path from "path";

const __dirname = path.resolve();
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.body);
});

export default router;

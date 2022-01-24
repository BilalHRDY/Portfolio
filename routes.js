import express from "express";
import { sendEmail } from "./middlewares/email.middleware.js";

const router = express.Router();

router.post("/", sendEmail);

export default router;

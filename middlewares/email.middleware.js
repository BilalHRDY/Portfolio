import nodemailer from "nodemailer";
// Import environnement variables
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.USER_SMTP,
    pass: process.env.PWD_SMTP,
  },
});

export async function sendEmail(req, res) {
  try {
    await transporter.sendMail({
      // from: req.body.email, // sender address
      to: process.env.EMAIL_BH,
      subject: `Message de ${req.body.name}`,
      text: req.body.message + `Email de l'envoyeur: ${req.body.email}`,
      html: `<p>${req.body.message}</p><p>Email de l'envoyeur: ${req.body.email}</p>`,
    });
    res.status(200).send({ mes: "L'email a bien été envoyé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
  }
}

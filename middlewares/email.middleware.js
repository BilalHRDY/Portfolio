import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "portfolio.bh69@gmail.com",
    pass: "tnkqqoftitgqodwr",
  },
});

export async function sendEmail(req, res) {
  try {
    await transporter.sendMail({
      // from: req.body.email, // sender address
      to: "hardybilal@hotmail.com",
      subject: `Message de ${req.body.name}`,
      text: req.body.message + `Email de l'envoyeur: ${req.body.email}`,
      html: `<p>${req.body.message}</p><p>Email de l'envoyeur: ${req.body.email}</p>`,
    });
    res.status(200).send({ mes: "L'email a bien été envoyé" });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
  }
}

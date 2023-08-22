const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", async (req, res) => {
  let data = req.body;
  if (
    data.firstName.length === 0 ||
    data.lastName.length === 0 ||
    data.email.length === 0 ||
    data.phone.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ code: 400, message: "Please fill all the fields" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "bjelogrlic.ivan@gmail.com",
      pass: "*********",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "bjelogrlic.ivan@gmail.com",
    subject: `Message from ${data.firstName} ${data.lastName}`,
    html: `
      <h3>Information</h3>
      <ul>
        <li>First Name: ${data.firstName}</li>
        <li>Last Name: ${data.lastName}</li>
        <li>Email: ${data.email}</li>
        <li>Phone: ${data.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  };

  try {
    await smtpTransporter.sendMail(mailOptions);
    res.status(200).json({ code: 200, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ code: 500, message: "There was an error sending the email" });
  }
});

module.exports = router;

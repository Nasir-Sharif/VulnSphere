import Subscriber from "../models/subscriberModel.js";
import nodemailer from "nodemailer";

export const subscribeUser = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.status(400).json({ message: "Already subscribed" });

    const newSub = new Subscriber({ email });
    await newSub.save();

    // ✅ Send confirmation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"VulnSphere" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for subscribing to VulnSphere!",
      html: `
        <h2>👋 Hello!</h2>
        <p>Thank you for subscribing to <strong>VulnSphere Cyber Updates</strong>.</p>
        <p>You’ll now receive updates on new vulnerabilities, tools, and news in cybersecurity.</p>
        <p>Stay secure,<br/>The VulnSphere Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Subscribed successfully and email sent!" });
  } catch (err) {
    console.error("Subscription error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

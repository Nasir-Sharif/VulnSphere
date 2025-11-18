import express from "express";
import Subscriber from "../models/subscriber.js"; // Create this model if not already
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required." });

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) return res.status(400).json({ message: "Already subscribed." });

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"VulnSphere" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Subscription Confirmed",
      html: `
        <h2>You're Subscribed! 🎉</h2>
        <p>Thanks for subscribing to VulnSphere. You'll now receive cybersecurity updates.</p>
      `,
    });

    res.status(200).json({ message: "Subscription successful." });
  } catch (error) {
    console.error("Subscription error:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
});

export default router;

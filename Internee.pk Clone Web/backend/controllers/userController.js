import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import User from '../models/user.js';

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists." });

    const verificationToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const newUser = new User({
      name,
      email,
      password, // Middleware will hash this
      verified: false,
      verificationToken,
      verificationTokenExpiry: Date.now() + 3600000,
    });
    await newUser.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"VulnSphere" <${process.env.EMAIL_USER}>`,
      to: newUser.email,
      subject: "Verify Your Email",
      html: `
        <div style="font-family: Urbanist, Arial, sans-serif; line-height: 1.5; color: #e5e7eb; background-color: #1a1a1a; padding: 20px; text-align: center;">
          <img src="${process.env.FRONTEND_URL}/images/Vulnlogoo.png" alt="VulnSphere" height="80" style="margin-bottom: 20px;" />
          <h2 style="color: #ffffff;">Welcome to VulnSphere</h2>
          <p style="color: #e5e7eb;">Thanks for signing up! Please verify your email by clicking the button below:</p>
          <a href="${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}" style="display: inline-block; padding: 12px 24px; background-color: #16a34a; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 0;">Verify Email</a>
          <p style="color: #e5e7eb;">If the button doesn't work, copy and paste this link into your browser:</p>
          <p style="color: #9ca3af; word-break: break-all;">${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}</p>
          <p style="color: #9ca3af;">© 2025 VulnSphere. All rights reserved.</p>
        </div>
      `,
    });

    console.log('Verification email sent to:', email);
    res.status(201).json({ message: "User registered. Please verify your email." });
  } catch (err) {
    console.error('Register error:', err.message, { email });
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.error('Login failed: User not found', { email });
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (!user.verified) {
      console.error('Login failed: Email not verified', { email });
      return res.status(403).json({ message: "Please verify your email before logging in" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password comparison:', { email, isMatch, inputPassword: password, storedHash: user.password });
    if (!isMatch) {
      console.error('Login failed: Invalid password', { email });
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.error('Login error:', err.message, { email });
    res.status(500).json({ message: "Login failed: " + err.message });
  }
};
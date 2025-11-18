import express from 'express';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import { registerUser, loginUser } from '../controllers/userController.js';

const router = express.Router();

// 📧 Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Register via Email
router.post('/sign-up', registerUser);

// ✅ Login via Email
router.post('/login', loginUser);

// ✅ Google OAuth Registration/Login
router.post('/google-auth', async (req, res) => {
  const { name, email, googleId } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        password: googleId + process.env.JWT_SECRET,
        verified: true,
      });
      await user.save();
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ message: 'Google login successful', user: { id: user._id, name: user.name, email: user.email }, token });
  } catch (err) {
    console.error('Google Auth Error:', err.message);
    res.status(500).json({ message: 'Google login failed', error: err.message });
  }
});

// ✅ Email Verification Handler
router.get('/verify-email', async (req, res) => {
  try {
    const decoded = jwt.verify(req.query.token, process.env.JWT_SECRET);
    const updatedUser = await User.findOneAndUpdate(
      { email: decoded.email },
      { verified: true, verificationToken: null, verificationTokenExpiry: null },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(400).send('❌ User not found.');
    }

    res.send('✅ Email verified successfully. You can now log in.');
  } catch (err) {
    console.error('Verify email error:', err.message);
    res.status(400).send('❌ Invalid or expired verification link.');
  }
});

// ✅ Forgot Password (Send Email)
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiry = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const mailOptions = {
      from: `"VulnSphere Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🔐 VulnSphere Password Reset',
      html: `
        <div style="font-family: Urbanist, Arial, sans-serif; line-height: 1.5; color: #e5e7eb; background-color: #1a1a1a; padding: 20px; text-align: center;">
          <img src="${process.env.FRONTEND_URL}/images/Vulnlogoo.png" alt="VulnSphere" height="80" style="margin-bottom: 20px;" />
          <h2 style="color: #ffffff;">Password Reset Request</h2>
          <p style="color: #e5e7eb;">Click the button below to reset your password. This link will expire in 1 hour.</p>
          <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #16a34a; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 0;">Reset Password</a>
          <p style="color: #9ca3af;">If you didn’t request this, please ignore this email.</p>
          <p style="color: #9ca3af;">© 2025 VulnSphere. All rights reserved.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent to:', email);
    res.json({ message: 'Password reset email sent.' });
  } catch (err) {
    console.error('Forgot password error:', err.message, { email });
    res.status(500).json({ message: 'Server error: ' + err.message });
  }
});

// ✅ Reset Password (with token)
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    if (!password || password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiry: { $gt: Date.now() },
    });

    if (!user) {
      console.error('Reset password failed: Invalid or expired token', { token });
      return res.status(400).json({ message: 'Invalid or expired reset token.' });
    }

    // Set password directly to trigger pre('save') middleware
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiry = undefined;

    await user.save();
    console.log('Password updated successfully for user:', user.email);

    res.json({ message: 'Password reset successfully.' });
  } catch (err) {
    console.error('Reset password error:', err.message, { token, email: req.body.email });
    res.status(500).json({ message: 'Server error: ' + err.message });
  }
});

export default router;
import express from "express";
import multer from "multer";
import path from "path";
import User from "../models/user.js";
import PaymentSubmission from "../models/paymentSubmission.js";

const router = express.Router();

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    if (!file || !file.originalname) {
      return cb(new Error('No file or invalid file provided'), null);
    }
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!file) {
      return cb(new Error('No file provided'), false);
    }
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'), false);
    }
  },
});

// Submit payment details (screenshot and transaction ID)
router.post("/submit", upload.single('screenshot'), async (req, res) => {
  console.log("POST /api/payments/submit received", req.body, req.file);
  const { userId, transactionId } = req.body;
  const screenshot = req.file;

  try {
    if (!userId || !transactionId || !screenshot) {
      return res.status(400).json({ message: "User ID, transaction ID, and screenshot are required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const paymentSubmission = new PaymentSubmission({
      userId,
      transactionId,
      screenshotPath: `/uploads/${screenshot.filename}`,
      status: "pending",
    });

    await paymentSubmission.save();
    res.status(201).json({ message: "Payment submitted successfully, awaiting admin verification" });
  } catch (error) {
    console.error("Payment submission error:", error);
    res.status(500).json({ message: "Payment submission failed: " + error.message });
  }
});

// Admin endpoint to verify payment
router.post("/verify", async (req, res) => {
  const { submissionId, status } = req.body;

  try {
    if (!submissionId || !["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Valid submission ID and status (approved/rejected) required" });
    }

    const submission = await PaymentSubmission.findById(submissionId);
    if (!submission) {
      return res.status(404).json({ message: "Payment submission not found" });
    }

    submission.status = status;
    await submission.save();

    if (status === "approved") {
      const user = await User.findById(submission.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      user.isPremium = true;
      await user.save();
    }

    res.json({ message: `Payment ${status} successfully` });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ message: "Payment verification failed: " + error.message });
  }
});

export default router;
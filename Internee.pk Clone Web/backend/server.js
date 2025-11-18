import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import subscribeRoutes from './routes/subscribeRoutes.js';
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config({ path: '.env', quiet: true });
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(express.json());

// Serve static files (e.g., uploaded screenshots)
app.use('/uploads', express.static('public/uploads'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/subscribe', subscribeRoutes);
app.use("/api/payments", paymentRoutes);

// Test route for debugging
app.get("/test", (req, res) => res.json({ message: "Server is running" }));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
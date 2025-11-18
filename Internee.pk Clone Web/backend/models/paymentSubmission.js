import mongoose from 'mongoose';

const paymentSubmissionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    screenshotPath: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const PaymentSubmission = mongoose.model('PaymentSubmission', paymentSubmissionSchema);
export default PaymentSubmission;
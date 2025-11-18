import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/images/Vulnlogoo.png';
import backgroundImage from '../../assets/images/signupbanner.jpg';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle resend timer
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email address.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/users/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg('Password reset email sent. Please check your inbox or spam folder.');
        setResendDisabled(true);
        setResendTimer(60);
        setTimeout(() => navigate('/sign-in'), 3000);
      } else {
        setErrorMsg(data.message || 'Failed to send reset email.');
      }
    } catch (err) {
      console.error('Forgot password error:', err);
      setErrorMsg('⚠️ Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (resendDisabled) return;
    handleSubmit(new Event('submit'));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center Urbanist p-4 bg-blackColor dark:bg-blackColor"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 dark:bg-gray-800/10 rounded-2xl shadow-2xl p-8 z-10 backdrop-blur-lg border border-white/30">
        <div className="flex justify-center mb-10">
          <img src={logo} alt="VulnSphere" className="h-12" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Forgot Your Password?
        </h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6">
          Enter your email address to receive a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
              placeholder="Enter your email"
              required
              aria-describedby="email-help"
            />
            <p id="email-help" className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              A reset link will be sent to this email if it exists in our system.
              <a
                href="#"
                className="text-green-500 hover:underline ml-1 transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Enter the email associated with your account. A reset link will be sent if the email exists in our system.');
                }}
              >
                Learn more
              </a>
            </p>
          </div>

          {errorMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm flex items-center gap-2"
            >
              <span>⚠️</span> {errorMsg}
            </motion.p>
          )}
          {successMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-green-500 text-sm flex items-center gap-2"
            >
              <span>✅</span> {successMsg}
            </motion.p>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-green-600 text-white rounded-xl py-3 font-semibold hover:bg-green-700 transition duration-300 shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Reset Link'
              )}
            </button>
            <button
              type="button"
              onClick={() => navigate('/sign-in')}
              className="w-full bg-gray-500 text-white rounded-xl py-3 font-semibold hover:bg-gray-600 transition duration-300 shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Didn’t receive the email?{' '}
            <button
              onClick={handleResend}
              disabled={resendDisabled}
              className={`text-green-500 hover:underline transition duration-300 ${resendDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Resend {resendDisabled ? `(${resendTimer}s)` : ''}
            </button>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Back to{' '}
            <Link to="/sign-in" className="text-green-500 hover:underline transition duration-300">
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>

      <footer className="mt-20 mb-10 text-center text-gray-400 text-sm">
        <p>© 2025 VulnSphere. All rights reserved. | <Link to="/support" className="text-green-500 hover:underline transition duration-300">Support</Link></p>
      </footer>
    </div>
  );
}

export default ForgotPassword;
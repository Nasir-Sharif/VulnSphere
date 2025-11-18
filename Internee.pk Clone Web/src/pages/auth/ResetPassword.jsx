import { useNavigate, useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { motion } from 'framer-motion';
import logo from '../../assets/images/Vulnlogoo.png';
import backgroundImage from '../../assets/images/signupbanner.jpg';

function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState('password');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    message: '',
    color: 'bg-gray-300',
  });

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const checkPasswordStrength = (pwd) => {
    let score = 0;
    let message = '';
    let color = 'bg-gray-300';

    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    if (score === 0) {
      message = 'Password is empty';
      color = 'bg-gray-300';
    } else if (score <= 2) {
      message = 'Weak: Use at least 8 characters, including uppercase, numbers, and symbols';
      color = 'bg-red-500';
    } else if (score === 3) {
      message = 'Moderate: Consider adding more complexity';
      color = 'bg-yellow-500';
    } else {
      message = 'Strong: Good password!';
      color = 'bg-green-500';
    }

    return { score, message, color };
  };

  useEffect(() => {
    setPasswordStrength(checkPasswordStrength(password));
  }, [password]);

  const handleToggle = () => {
    setIcon(type === 'password' ? eye : eyeOff);
    setType(type === 'password' ? 'text' : 'password');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      setLoading(false);
      return;
    }

    if (passwordStrength.score < 3) {
      setErrorMsg('Password is too weak. Please use a stronger password.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/users/reset-password/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMsg('Password reset successfully. Redirecting to sign-in...');
        setTimeout(() => navigate('/sign-in'), 3000);
      } else {
        setErrorMsg(data.message || 'Failed to reset password.');
      }
    } catch (err) {
      console.error('Reset password error:', err);
      setErrorMsg('⚠️ Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
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
        <div className="flex justify-center mb-6">
          <img src={logo} alt="VulnSphere" className="h-12" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Reset Your Password
        </h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6">
          Enter a new password to secure your account. Ensure it’s strong and unique.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
              New Password
            </label>
            <input
              type={type}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
              placeholder="Enter new password"
              required
            />
            <span className="absolute right-4 top-12 cursor-pointer text-gray-500 dark:text-gray-300" onClick={handleToggle}>
              <Icon icon={icon} size={20} />
            </span>
            <div className="mt-2">
              <div className={`h-2 rounded-full ${passwordStrength.color} transition-all`} style={{ width: `${(passwordStrength.score / 4) * 100}%` }} />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{passwordStrength.message}</p>
            </div>
          </div>

          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type={type}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
              placeholder="Confirm new password"
              required
            />
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
                  Processing...
                </span>
              ) : (
                'Reset Password'
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
            Password requirements: At least 8 characters, including uppercase, numbers, and symbols.
            <a
              href="#"
              className="text-green-500 hover:underline ml-1 transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                alert('Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.');
              }}
            >
              Learn more
            </a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Back to{' '}
            <a href="/sign-in" className="text-green-500 hover:underline transition duration-300">
              Sign In
            </a>
          </p>
        </div>
      </motion.div>

      <footer className="mt-8 text-center text-gray-400 text-sm">
        <p>© 2025 VulnSphere. All rights reserved. | <a href="/support" className="text-green-500 hover:underline transition duration-300">Support</a></p>
      </footer>
    </div>
  );
}

export default ResetPassword;
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../components/AuthContext.jsx";
import axios from "axios";

export default function Payment() {
  const { user, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Check authentication status and redirect if not logged in
  useEffect(() => {
    if (!isLoggedIn && !user) {
      navigate("/sign-in", { replace: true });
    } else {
      setAuthLoading(false);
    }
  }, [isLoggedIn, user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.id) {
      setErrorMsg("Please log in to submit a payment.");
      return;
    }
    if (!transactionId) {
      setErrorMsg("Please provide a transaction ID.");
      return;
    }
    if (!screenshot || !(screenshot instanceof File)) {
      setErrorMsg("Please select a valid image file for the screenshot.");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    const formData = new FormData();
    formData.append("userId", user.id);
    formData.append("transactionId", transactionId);
    formData.append("screenshot", screenshot);

    // Log FormData contents for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`FormData: ${key} =`, value);
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/payments/submit`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccessMsg("Payment submitted successfully! Awaiting admin verification.");
      setTransactionId("");
      setScreenshot(null);
    } catch (error) {
      console.error("Payment submission error:", error);
      setErrorMsg("Submission failed: " + (error.response?.data?.message || error.message));
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="h-screen flex items-center justify-center Urbanist">
        <svg className="animate-spin h-8 w-8 text-greenColor" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="h-screen mt-24 md:mt-20 lg:mt-28 xl:mt-24 pb-5 Urbanist">
      <div className="container-sm flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md bg-white/10 dark:bg-gray-800/10 rounded-2xl shadow-2xl p-8 z-10 backdrop-blur-lg border border-white/30"
        >
          <h2 className="text-center text-2xl text-whiteColor font-semibold mb-6">
            Become a Premium Member
          </h2>
          <p className="text-center text-sm text-whiteColor mb-6">
            Submit your payment details for admin verification.
          </p>

          {errorMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-red-500 text-sm mb-4"
            >
              {errorMsg}
            </motion.p>
          )}
          {successMsg && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-greenColor text-sm mb-4"
            >
              {successMsg}
            </motion.p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-whiteColor mb-1">
                Transaction ID
              </label>
              <input
                type="text"
                id="transactionId"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white/10 dark:bg-gray-700/10 text-whiteColor"
                placeholder="Enter transaction ID"
                disabled={isLoading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-whiteColor mb-1">
                Payment Screenshot
              </label>
              <input
                type="file"
                id="screenshot"
                accept="image/*"
                onChange={(e) => setScreenshot(e.target.files[0])}
                className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white/10 dark:bg-gray-700/10 text-whiteColor"
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-greenColor text-white rounded-xl py-2 hover:bg-gray-800 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mx-auto text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                "Submit Payment"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-whiteColor mt-4">
            Already a premium member?{" "}
            <a
              href="/premium-content"
              className="text-greenColor hover:underline"
            >
              Access Tools
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
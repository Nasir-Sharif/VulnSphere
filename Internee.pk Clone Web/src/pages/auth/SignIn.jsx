import { useNavigate, Link, useLocation } from "react-router-dom";
import React, { useState, useContext, useEffect, useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import image from "../../assets/images/signinbannner.jpg";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";
import { AuthContext } from "../../components/AuthContext.jsx";
import "./glitch.css";

function SignIn() {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [icon, setIcon] = useState("eye-off");
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const hasNavigated = useRef(false); // Prevent multiple navigations

  // Log Client ID only once
  useEffect(() => {
    console.log("Google Client ID:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
  }, []);

  const handleToggle = () => {
    setIcon(type === "password" ? "eye" : "eye-off");
    setType(type === "password" ? "text" : "password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", res, data);

      if (res.ok) {
        console.log("Calling login with user:", data.user);
        login(data.user);
        const from = location.state?.from?.pathname || "/cyberdashboard";
        console.log("Navigating to:", from);
        navigate(from, { replace: true });
      } else {
        setErrorMsg(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg("⚠️ Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    setIsLoading(true);
    setErrorMsg("");
    try {
      console.log("Google OAuth Response:", credentialResponse);
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Decoded Google Token:", decoded);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/google-auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          googleId: decoded.sub,
        }),
      });

      const data = await res.json();
      console.log("Backend Google Auth Response:", res, data);

      if (res.ok) {
        console.log("Calling login with user:", data.user);
        login(data.user);
        const from = location.state?.from?.pathname || "/cyberdashboard";
        console.log("Navigating to:", from);
        navigate(from, { replace: true });
      } else {
        console.error("Backend error:", data);
        setErrorMsg(data.message || "Google sign-in failed.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      setErrorMsg(`⚠️ Google login error: ${error.message || "Unknown error"}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen mt-24 md:mt-20 lg:mt-28 xl:mt-24 pb-5 Urbanist">
      <div className="container-sm flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 relative hidden md:flex flex-col justify-center items-center bg-cover bg-center"
        >
          <img
            src={image}
            alt="Sign In Banner"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-blackColor opacity-60 z-0 rounded-xl"></div>
          <div className="absolute top-1/4 px-8 text-white text-center z-10">
            <motion.h1
              className="text-4xl lg:text-5xl font-extrabold glitch-text leading-tight mb-4"
              animate={{ opacity: [1, 0.8, 1], y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Welcome to <span className="text-green-500">VulnSphere</span>
            </motion.h1>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              A trusted platform for security learners and professionals. Stay updated with the latest cyber threats, learn tools, and sharpen your skills — all in one place.
            </p>
            <ul className="text-left text-sm text-gray-300 space-y-2">
              <li>✅ Latest Cybersecurity News & Vulnerability Reports</li>
              <li>✅ Curated Tools for Red & Blue Teamers</li>
              <li>✅ Internship & Training Opportunities</li>
              <li>✅ Expert Guidance & Community Support</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center items-center dark:bg-blackColor bg-gray-100 h-screen"
        >
          <div className="w-full max-w-md bg-white/10 dark:bg-gray-800/10 rounded-2xl shadow-2xl p-8 z-10 backdrop-blur-lg border border-white/30">
            <h2 className="text-center text-2xl  text-whiteColor font-semibold mb-6">Sign in to VulnSphere</h2>

            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={(error) => {
                  console.error("Google Login Error:", error);
                  setErrorMsg("Google login failed. Please try again.");
                }}
                width={377}
                theme="outline"
                size="large"
                text="signin_with"
                shape="rectangular"
                logo_alignment="left"
              />
            </GoogleOAuthProvider>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-white-700 text-whiteColor mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="mb-4 relative">
                <label className="block text-gray-700 text-whiteColor mb-1">Password</label>
                <input
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                  disabled={isLoading}
                />
                <span className="absolute right-3 top-9 cursor-pointer" onClick={handleToggle}>
                  {icon === "eye" ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </span>
              </div>

              <div className="text-right mb-4">
                <Link to="/forgot-password" className="text-greenColor hover:underline text-sm">
                  Forgot Password?
                </Link>
              </div>

              {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}

              <button
                type="submit"
                className="w-full bg-greenColor text-white rounded-xl py-2 hover:bg-gray-800 transition disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>
            </form>

            <p className="text-center text-sm text-whiteColor mt-4">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="text-greenColor hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(SignIn);
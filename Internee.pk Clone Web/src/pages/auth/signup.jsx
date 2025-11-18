import { useNavigate, Link, useLocation } from "react-router-dom";
import React, { useState, useContext } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import image from "../../assets/images/signinbannner.jpg";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";
import { AuthContext } from "../../components/AuthContext.jsx";
import "./glitch.css";

function SignUp() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [icon, setIcon] = useState("eye-off");
  const [type, setType] = useState("password");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIcon(type === "password" ? "eye" : "eye-off");
    setType(type === "password" ? "text" : "password");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");
    setIsLoading(true);

    try {
      console.log("API URL:", import.meta.env.VITE_API_URL);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const text = await res.text();
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        throw new Error("Invalid JSON response from server");
      }

      if (res.ok) {
        setSuccessMsg("Sign-up successful! Please check your email (including spam/junk) to verify your account before logging in.");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMsg(data.message || "Sign-up failed.");
      }
    } catch (err) {
      console.error("Sign-up error:", err);
      setErrorMsg(`⚠️ ${err.message || "Server error. Please try again later."}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async (credentialResponse) => {
    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    try {
      console.log("Google OAuth Response:", credentialResponse);
      const decoded = jwtDecode(credentialResponse.credential);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/google-auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          googleId: decoded.sub,
        }),
      });

      const text = await res.text();
      console.log("Raw Google auth response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (error) {
        throw new Error("Invalid JSON response from server");
      }

      if (res.ok) {
        login(data.user);
        const from = location.state?.from?.pathname || "/cyberdashboard";
        navigate(from, { replace: true });
      } else {
        setErrorMsg(data.message || "Google sign-up failed.");
      }
    } catch (error) {
      console.error("Google sign-up error:", error);
      setErrorMsg(`⚠️ ${error.message || "Google sign-up error. Try again later."}`);
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
          <img src={image} alt="Sign Up Banner" className="w-full h-full object-cover rounded-xl" />
          <div className="absolute inset-0 bg-blackColor opacity-50 z-0"></div>
          <div className="absolute top-1/4 text-center text-white px-6">
            <motion.h1
              className="text-4xl lg:text-5xl font-extrabold mb-4 glitch-text leading-tight"
              animate={{ opacity: [1, 0.8, 1], y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Join VulnSphere
            </motion.h1>
            <p className="mb-4 text-base">Empowering you with the tools and knowledge to secure the digital world.</p>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>✅ Access exclusive cybersecurity tools</li>
              <li>📡 Stay informed with real-time threat updates</li>
              <li>📚 Learn from expert-led content</li>
              <li>💼 Track internships and career growth</li>
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
            <h2 className="text-center text-2xl  text-whiteColor font-semibold mb-6">Create Your Account</h2>

            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
              <GoogleLogin
                onSuccess={handleGoogleSignUp}
                onError={(error) => {
                  console.error("Google Sign-Up Error:", error);
                  setErrorMsg("Google sign-up failed.");
                }}
                width={377} // Changed to numeric value (pixels)
                theme="outline"
                size="large"
                text="signup_with"
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
                <label className="block  text-whiteColor text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-whiteColor  mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="mb-4 relative">
                <label className="block text-gray-700 text-whiteColor  mb-1">Password</label>
                <input
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  disabled={isLoading}
                />
                <span className="absolute right-3 top-9 cursor-pointer" onClick={handleToggle}>
                  {icon === "eye" ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                </span>
              </div>

              {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
              {successMsg && <p className="text-green-500 text-sm mb-4">{successMsg}</p>}

              <button
                type="submit"
                className="w-full bg-green-600 text-white rounded-xl py-2 hover:bg-green-700 transition disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            <p className="text-center  text-whiteColor text-sm mt-4">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-green-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SignUp;
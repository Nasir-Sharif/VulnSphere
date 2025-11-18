import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/images/vulnLogowhite.png";
import logoGreen from "../assets/images/logo-green.png";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Footer() {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setMessage("Subscribed successfully!");
        setMessageType("success");
        setEmail("");
        setTimeout(() => setMessage(""), 5000);
      } else {
        const data = await response.json();
        setMessage(data.message || "Subscription failed.");
        setMessageType("error");
        setTimeout(() => setMessage(""), 5000);
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      setMessageType("error");
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <footer className="dark:bg-darkgray dark:text-whiteColor text-themeGray bg-gray-200 Urbanist py-12">
      <div className="container-sm">
        {/* Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
          <div>
            <h3 className="text-xl font-bold">Subscribe to Our Cyber Updates</h3>
            <p className="dark:text-gray-400 text-themeGray mt-2">
              Get updates on the latest vulnerabilities, tools, and cybersecurity news.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-4 md:mt-0 w-full md:w-auto lg:w-auto flex justify-between items-center dark:text-whiteColor dark:bg-gray-700 bg-whiteColor shadow text-themeGray rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 bg-transparent dark:text-whiteColor text-themeGray focus:outline-none"
            />
            <button
              type="submit"
              className="GreenColorBackground text-whiteColor px-6 py-2 mr-2 rounded-full hover:bg-green-600"
            >
              Subscribe
            </button>
          </form>
          {message && <p className={`mt-2 ${messageType === "success" ? "text-green-500" : "text-red-500"}`}>{message}</p>}
        </div>

        {/* Main Footer Content */}
        <div className="gap-8 justify-between flex flex-col md:flex-row lg:flex-row">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={theme === "light" ? logoGreen : logo}
                alt="VulnSphere"
                className="h-40"
              />
            </div>
            <p className="dark:text-gray-400 text-themeGray">
              VulnSphere is your gateway to mastering cybersecurity — offering tools, updates, latest News, and learning resources for aspiring infosec professionals.
            </p>
            <div className="flex items-center mt-4 dark:text-gray-400 text-themeGray">
              <FaPhoneAlt className="mr-2 text-pink-500" />
              <span>+92 320 0953526</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/nasir.sharif.33886/" target="_blank" rel="noopener noreferrer" className="GreenColorBackground p-2 rounded-full text-white">
                <FaFacebookF />
              </a>
              <a href="https://x.com/Maybenasir08" target="_blank" rel="noopener noreferrer" className="GreenColorBackground p-2 rounded-full text-white">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/nasir-sharif-b1744124b" target="_blank" rel="noopener noreferrer" className="GreenColorBackground p-2 rounded-full text-white">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/nasirsharif_911?igsh=MjBsOHJ4d3Jxemo4" target="_blank" rel="noopener noreferrer" className="GreenColorBackground p-2 rounded-full text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-24 dark:text-gray-400 text-themeGray">
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/studentambassadors" onClick={scrollToTop}>Student Ambassadors</Link></li>
                <li><Link to="/internship" onClick={scrollToTop}>Internship Program</Link></li>
                <li><Link to="/about" onClick={scrollToTop}>About VulnSphere</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="#">Cybersecurity Tools</Link></li>
                <li><Link to="#">Vulnerability News</Link></li>
                <li><Link to="#">Training & Courses</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm dark:text-gray-400 text-themeGray">
          <p>© 2025 VulnSphere Developed By Nasir Sharif. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
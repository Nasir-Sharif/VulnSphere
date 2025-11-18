import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt, FaNetworkWired, FaBug, FaTimes, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext.jsx";
import axios from "axios";

export default function GraduateProgram() {
  const { user, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // State for news
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  // Cybersecurity tools data (your uploaded tools)
  const tools = [
    {
      name: "VulnSphere Scanner",
      description: "A custom network vulnerability scanner to identify open ports and weaknesses.",
      category: "Network Security",
      type: "Free for Premium",
      icon: <FaNetworkWired className="text-green-600 text-4xl" />,
      downloadUrl: "/tools/vulnsphere-scanner.zip",
      image: "/images/tools/scanner.jpg",
    },
    {
      name: "VulnSphere Encryptor",
      description: "A tool for encrypting sensitive data with AES-256 for secure storage.",
      category: "Data Protection",
      type: "Paid for Premium",
      icon: <FaShieldAlt className="text-green-600 text-4xl" />,
      downloadUrl: "/tools/vulnsphere-encryptor.exe",
      image: "/images/tools/encryptor.jpg",
    },
    {
      name: "VulnSphere PenTest",
      description: "A penetration testing script for simulating cyber attacks on web applications.",
      category: "Penetration Testing",
      type: "Free for Premium",
      icon: <FaBug className="text-green-600 text-4xl" />,
      downloadUrl: "/tools/vulnsphere-pentest.py",
      image: "/images/tools/pentest.jpg",
    },
  ];

  // Fetch news from NewsAPI
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=cybersecurity+data+breach&apiKey=${
            import.meta.env.VITE_NEWSAPI_KEY
          }&language=en&sortBy=publishedAt&pageSize=6`
        );
        const uniqueNews = response.data.articles
          .filter(
            (article, index, self) =>
              index === self.findIndex((a) => a.title === article.title)
          )
          .map((article, index) => ({
            id: index + 1,
            title: article.title,
            description: article.description || "No description available.",
            source: article.source.name,
            date: new Date(article.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            url: article.url,
          }));
        setNews(uniqueNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([
          {
            id: 1,
            title: "Hackers Hide ZuRu Trojan in Mac Apps",
            description:
              "SentinelOne warns of hackers bundling legitimate Mac tools with a ZuRu trojan, targeting developers via poisoned search results.",
            source: "Cybernews",
            date: "July 9, 2025",
            url: "https://cybernews.com",
          },
          {
            id: 2,
            title: "Android Tapjacking Flaw Discovered",
            description:
              "A new tapjacking method makes security prompts invisible, tricking users into granting dangerous permissions.",
            source: "Cybernews",
            date: "July 9, 2025",
            url: "https://cybernews.com",
          },
        ]);
      }
    };
    fetchNews();
  }, []);

  // Handle download click
  const handleDownload = (tool) => {
    console.log("handleDownload triggered", {
      isLoggedIn,
      user,
      tool: tool.name,
      apiUrl: import.meta.env.VITE_API_URL,
    });
    if (!isLoggedIn || !user) {
      console.log("Redirecting to /sign-in");
      navigate("/sign-in", { state: { from: "/premium-content" } });
    } else if (!user.isPremium) {
      console.log("Redirecting to /payment for tool:", tool.name);
      navigate("/payment", { state: { tool: tool.name } });
    } else {
      console.log("Initiating download for tool:", tool.name);
      window.location.href = `${import.meta.env.VITE_API_URL}${tool.downloadUrl}`;
    }
  };

  return (
    <>
      <div className="dark:bg-blackColor bg-whiteColor mt-24 md:mt-20 lg:mt-28 xl:mt-28 pt-28 pb-20">
        <div className="container-sm">
          <div className="mx-auto text-center">
            <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold dark:text-whiteColor text-greenColor">
              Premium Cybersecurity Hub
            </h1>
            <p className="text-lg max-w-xl my-3 dark:text-whiteColor text-blackColor mx-auto">
              Unlock exclusive access to custom cybersecurity tools, real-time news, and advanced training for premium users.
            </p>
          </div>

          {/* Cybersecurity News Section */}
          <div className="py-10 dark:bg-blackColor bg-gray-100 rounded-xl mt-28 p-8 md:mt-36 lg:mt-36">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-3 dark:text-whiteColor text-blackColor">
                Latest Cybersecurity News
              </h2>
              <p className="text-lg dark:text-whiteColor text-blackColor">
                Stay informed with real-time updates on cybersecurity threats and trends.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8 px-2 lg:px-64">
              {news.map((item) => (
                <motion.div
                  key={item.id}
                  className="dark:bg-blackColor/10 bg-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-lg border border-white/30 hover:scale-105 transition-transform duration-200"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedNews(item)}
                >
                  <h3 className="text-lg font-bold dark:text-whiteColor text-blackColor">
                    {item.title}
                  </h3>
                  <p className="text-sm dark:text-gray-300 text-gray-600 mt-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {item.source} • {item.date}
                  </p>
                  <button className="mt-4 text-green-600 hover:underline">
                    Read More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cybersecurity Tools Section */}
          <div className="py-10 dark:bg-blackColor bg-gray-100 rounded-xl mt-12 p-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-3 dark:text-whiteColor text-blackColor">
                Top Cybersecurity Tools for 2025
              </h2>
              <p className="text-lg dark:text-whiteColor text-blackColor">
                Discover the best free and paid tools to secure your digital assets.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8 px-2 lg:px-64">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="dark:bg-blackColor/10 bg-white/10 rounded-2xl shadow-lg p-6 backdrop-blur-lg border border-white/30 hover:scale-105 transition-transform duration-200"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-bold dark:text-whiteColor text-blackColor text-center">
                    {tool.name}
                  </h3>
                  <p className="text-sm dark:text-gray-300 text-gray-600 mt-2">
                    {tool.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Category: {tool.category} • {tool.type}
                  </p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-green-600 hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Custom Cybersecurity Tools Section */}
          <div className="py-10 dark:bg-blackColor bg-gray-100 rounded-xl mt-12 p-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-3 dark:text-whiteColor text-blackColor">
                Exclusive Cybersecurity Tools
              </h2>
              <p className="text-lg dark:text-whiteColor text-blackColor">
                Access our proprietary tools, available only to premium users.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 py-8 px-2 lg:px-64">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  className="dark:bg-blackColor/10 bg-white/10 dark:text-whiteColor text-themeGray rounded-2xl overflow-hidden shadow dark:border-whiteColor dark:border-2 backdrop-blur-lg border border-white/30 hover:scale-105 transition-transform duration-100 ease-in-out"
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-60 object-cover"
                    onError={(e) => (e.target.src = "/images/tools/placeholder.jpg")}
                  />
                  <div className="p-3 text-center">
                    <h3 className="dark:text-white text-themeGray font-bold text-lg">
                      {tool.name}
                    </h3>
                    <p className="text-sm dark:text-gray-300 text-gray-600">
                      {tool.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Category: {tool.category} • {tool.type}
                    </p>
                    <button
                      onClick={() => handleDownload(tool)}
                      className="mt-4 inline-block bg-green-600 text-whiteColor px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2"
                    >
                      <FaLock className={isLoggedIn && user?.isPremium ? "hidden" : ""} />
                      Download Tool
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Alert Popup for News */}
          <AnimatePresence>
            {selectedNews && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white/10 dark:bg-blackColor/10 rounded-2xl p-6 max-w-md w-full backdrop-blur-lg border border-white/30"
                  initial={{ scale: 0.8, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 50 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold dark:text-whiteColor text-blackColor">
                      {selectedNews.title}
                    </h3>
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="text-gray-400 hover:text-whiteColor"
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <p className="text-sm dark:text-gray-300 text-gray-600 mb-4">
                    {selectedNews.description}
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    {selectedNews.source} • {selectedNews.date}
                  </p>
                  <a
                    href={selectedNews.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-whiteColor px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Read Full Article
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
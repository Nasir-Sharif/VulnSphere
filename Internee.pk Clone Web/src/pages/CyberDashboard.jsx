import networkSecurity from "../assets/images/network-security.jpg";
import malwareAnalysis from "../assets/images/malware.jpg";
import penetrationTesting from "../assets/images/pen-testing.jpg";
import socMonitoring from "../assets/images/soc.jpg";
import digitalForensics from "../assets/images/forencics.jpg";
import webSecurity from "../assets/images/websecurity.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function CyberDashboard() {
   const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("vulnsphere-user");
    if (!user) {
      navigate("/sign-in");
    }
  }, [navigate]);
  const modules = [
    { title: "Network Security", image: networkSecurity },
    { title: "Malware Analysis", image: malwareAnalysis },
    { title: "Penetration Testing", image: penetrationTesting },
    { title: "SOC Monitoring", image: socMonitoring },
    { title: "Digital Forensics", image: digitalForensics },
    { title: "Web Application Security", image: webSecurity },
  ];

  return (
    <>
      <div className="dark:bg-blackColor bg-whiteColor mt-24 md:mt-20 lg:mt-28 xl:mt-28 pt-40 pb-20">
        <div className="container-sm">
          <div className="flex flex-col md:flex-row lg:flex-row">
            <div className="mb-24 lg:mb-0">
              <h1 className="text-5xl font-bold dark:text-whiteColor text-greenColor">Welcome to Your Cybersecurity Dashboard</h1>
              <p className="text-lg max-w-xl my-3 dark:text-whiteColor text-blackColor">
                Start securing the future. Track your progress, explore new topics, and stay ahead of cyber threats.
              </p>
              <button className="GreenColorBackground px-8 py-2 rounded-xl text-white text-lg hover:bg-green-800 shadow">
                Continue Learning
              </button>
            </div>
            <div className="mx-auto">
              <div className="GreenColorBackground px-5 md:px-12 lg:px-12 py-10 rounded-xl text-white text-xl md:text-2xl lg:text-2xl font-bold shadow">
                Your Cyber Defense Journey Starts Now!
              </div>
            </div>
          </div>

          {/* MODULES */}
          <div className="py-10 dark:bg-darkgray bg-gray-100 rounded-xl mt-28 p-8 md:mt-36 lg:mt-36">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-3 dark:text-greenColor text-blackColor">Cybersecurity Learning Modules</h1>
              <p className="text-lg dark:text-whiteColor max-w-2xl mx-auto">
                Hands-on labs and curated content to become a cybersecurity expert.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-8">
              {modules.map((item, index) => (
                <div
                  key={index}
                  className="dark:bg-darkgray bg-whiteColor dark:text-whiteColor text-themeGray rounded-2xl overflow-hidden shadow dark:border-whiteColor dark:border-2 hover:scale-105 transition-transform duration-100 ease-in-out"
                >
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-3 text-center">
                    <h3 className="dark:text-white text-themeGray font-bold text-lg">{item.title}</h3>
                    <hr className="my-3" />
                    <div className="greenText text-md mt-1 cursor-pointer font-semibold">
                      <button className="GreenColorBackground px-8 py-2 rounded-xl text-white text-lg w-full shadow">
                        Start Module
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <hr className="w-full text-whiteColor mt-5" />
          <div className="container-sm dark:text-whiteColor text-blackColor flex flex-col md:flex-row lg:flex-row gap-4 justify-center px-20 py-20 items-center">
            <div className="text-center">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-lg">Cyber Labs Completed</p>
            </div>
            <div className="w-48 md:w-24 lg:w-24 rotate-0 md:rotate-90 lg:rotate-90">
              <hr />
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">900+</p>
              <p className="text-lg">Community Members</p>
            </div>
            <div className="w-48 md:w-24 lg:w-24 rotate-0 md:rotate-90 lg:rotate-90">
              <hr />
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">70+</p>
              <p className="text-lg">Bug Bounties Shared</p>
            </div>
          </div>
          <hr className="w-full text-whiteColor" />

          {/* CERTIFICATIONS */}
          <div className="mt-20">
            <h2 className="text-3xl dark:text-whiteColor font-bold mb-4 text-center">Your Certifications</h2>
            <div className="flex justify-center">
              <div className="bg-white dark:bg-darkgray p-6 rounded-xl shadow-md max-w-md text-center">
                <p className="text-xl dark:text-whiteColor">🔐 Basic Web Security - <span className="text-greenColor">Completed</span></p>
                <p className="text-xl dark:text-whiteColor">💻 SOC Fundamentals - <span className="text-greenColor">In Progress</span></p>
              </div>
            </div>
          </div>

          {/* THREAT FEED */}
          <div className="mt-20">
            <h2 className="text-3xl dark:text-whiteColor font-bold mb-4 text-center">Latest Threat Alerts</h2>
            <div className="dark:bg-darkgray bg-gray-100 rounded-xl p-6 max-w-3xl mx-auto">
              <ul className="text-left dark:text-whiteColor">
                <li className="mb-3">🛡️ New CVE-2025-1043 targeting Apache servers.</li>
                <li className="mb-3">⚠️ Increase in phishing attempts reported on LinkedIn.</li>
                <li className="mb-3">📉 Microsoft zero-day vulnerability being exploited in the wild.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


import React from 'react';
import { Shield, AlertTriangle, Lock } from "lucide-react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function AIMockInterview() {
    return (
        <section
            className="relative text-white py-20 px-2 md:px-0 lg:px-0 bg-cover bg-center Urbanist"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1657031162349-c73db42f2a2a?auto=format&fit=crop&q=80')",
            }}
        >
            <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-70 z-0"></div>
            <div className="relative max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 bg-green-500/10 text-lg px-3 py-1 rounded-full mb-4 backdrop-blur-sm w-fit">
                            <Shield size={20} />
                            <span>Cybersecurity Tool Tutorials</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2 dark:text-whiteColor text-blackColor">
                            Learn Cybersecurity Tools <br /> with Interactive Tutorials
                        </h2>
                        <p className="text-lg mt-4 max-w-xl dark:text-whiteColor text-blackColor">
                            Master tools like <span className="font-semibold">CrowdStrike, Palo Alto, and Splunk</span> through guided tutorials. Get hands-on experience with our platform’s premium access to real-world cybersecurity tools and scenarios.
                        </p>
                        <a
                            href="#subscribe"
                            className="GreenColorBackground hover:bg-green-700 transition-all text-white px-6 py-3 rounded-xl font-semibold mt-6 flex items-center gap-2"
                        >
                            Subscribe for Tool Access <AiOutlineArrowRight />
                        </a>
                    </div>

                    <div className="space-y-4">
                        <div className="dark:bg-darkgray bg-whiteColor shadow p-6 rounded-xl flex gap-3">
                            <div className="bg-green-500/10 backdrop-blur-sm p-3 rounded-xl">
                                <Shield size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 dark:text-whiteColor text-blackColor">Tool-Based Learning</h3>
                                <p>
                                    Explore tutorials for industry-leading tools like <span className="font-semibold">Wireshark, Nessus, and Metasploit</span> to build practical cybersecurity skills.
                                </p>
                            </div>
                        </div>
                        <div className="dark:bg-darkgray bg-whiteColor shadow p-6 rounded-xl flex gap-3">
                            <div className="bg-green-500/10 backdrop-blur-sm p-3 rounded-xl">
                                <AlertTriangle size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 dark:text-whiteColor text-blackColor">Real-World Threat Scenarios</h3>
                                <p>
                                    Practice defending against <span className="font-semibold">phishing, ransomware, and DDoS attacks</span> in simulated environments.
                                </p>
                            </div>
                        </div>
                        <div className="dark:bg-darkgray bg-whiteColor shadow p-6 rounded-xl flex gap-3">
                            <div className="bg-green-500/10 backdrop-blur-sm p-3 rounded-xl">
                                <Lock size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 dark:text-whiteColor text-blackColor">Premium Tool Access</h3>
                                <p>
                                    Unlock premium access to advanced cybersecurity tools with a subscription for hands-on learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    <div className="dark:bg-darkgray bg-whiteColor shadow p-6 rounded-xl">
                        <div className="greenText mb-4"><Shield size={28} /></div>
                        <h3 className="text-xl font-bold mb-2 dark:text-whiteColor text-blackColor">Stay Ahead of Threats</h3>
                        <p>
                            Learn to counter the latest cybersecurity threats with up-to-date tutorials and simulations.
                        </p>
                    </div>
                    <div className="dark:bg-darkgray bg-whiteColor shadow p-6 rounded-xl">
                        <div className="greenText mb-4"><AlertTriangle size={28} /></div>
                        <h3 className="text-xl font-bold mb-2 dark:text-whiteColor text-blackColor">Industry Insights</h3>
                        <p>
                            Stay informed with news on <span className="font-semibold">zero-day vulnerabilities</span> and emerging threats.
                        </p>
                    </div>
                    <div className="dark:bg-darkgray bg-whiteColor shadow p-6 rounded-xl">
                        <div className="greenText mb-4"><Lock size={28} /></div>
                        <h3 className="text-xl font-bold mb-2 dark:text-whiteColor text-blackColor">Tool Mastery</h3>
                        <p>
                            Gain expertise in tools like <span className="font-semibold">Splunk and FortiGate</span> through guided projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


import React from 'react';
import { Shield, AlertTriangle, Lock, TrendingUp } from "lucide-react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import backgroundImage from '../assets/images/cybersecuritybackground2.jpeg';
export default function CareerLaunchSection() {
    return (
        <section
            className="relative text-white py-20 px-2 md:px-0 lg:px-0 bg-cover bg-center Urbanist"
            style={{
                backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-70 z-0"></div>
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 bg-green-500/10 text-lg px-4 py-1 rounded-full mb-4 backdrop-blur-sm w-fit">
                        <Shield size={20} />
                        <span>Cybersecurity Learning Hub</span>
                    </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-whiteColor text-blackColor">
                    Launch Your Cybersecurity Expertise
                </h2>
                <p className="text-base md:text-lg max-w-3xl mb-10 mx-auto dark:text-whiteColor text-blackColor">
                    Join our platform to master cybersecurity tools, stay updated on threats, and access premium resources. Subscribe for exclusive tool access and industry insights.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-semibold text-2xl mb-12">
                    <div className="dark:bg-darkgray bg-whiteColor greenText shadow p-3 rounded-xl">
                        50+<br /><span className="text-sm font-normal dark:text-whiteColor text-blackColor">Cybersecurity Tools</span>
                    </div>
                    <div className="dark:bg-darkgray bg-whiteColor greenText shadow p-3 rounded-xl">
                        100+<br /><span className="text-sm font-normal dark:text-whiteColor text-blackColor">Threat Guides</span>
                    </div>
                    <div className="dark:bg-darkgray bg-whiteColor greenText shadow p-3 rounded-xl">
                        10,000+<br /><span className="text-sm font-normal dark:text-whiteColor text-blackColor">Active Learners</span>
                    </div>
                    <div className="dark:bg-darkgray bg-whiteColor greenText shadow p-3 rounded-xl">
                        20+<br /><span className="text-sm font-normal dark:text-whiteColor text-blackColor">Industry Experts</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-xl">
                        <div className="mb-4"><Shield className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                        <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Tool-Based Learning</h3>
                        <p className="mb-4 text-base font-medium">
                            Master tools like <span className="font-semibold">Wireshark, Nessus, and Splunk</span> with hands-on tutorials and premium access.
                        </p>
                        <ul className="text-md space-y-2">
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Tool Tutorials</li>
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Practical Exercises</li>
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Real-World Scenarios</li>
                        </ul>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-xl">
                        <div className="mb-4"><AlertTriangle className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                        <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Threat Awareness</h3>
                        <p className="mb-4 text-base font-medium">
                            Stay informed about <span className="font-semibold">ransomware, phishing, and zero-day exploits</span> with up-to-date news and guides.
                        </p>
                        <ul className="text-md space-y-2">
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Threat Briefings</li>
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Case Studies</li>
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Mitigation Strategies</li>
                        </ul>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-xl">
                        <div className="mb-4"><Lock className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                        <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Premium Access</h3>
                        <p className="mb-4 text-base font-medium">
                            Unlock advanced tools and exclusive content with a subscription to enhance your cybersecurity skills.
                        </p>
                        <ul className="text-md space-y-2">
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Tool Access</li>
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Premium Guides</li>
                            <li><AiOutlineCheckCircle className="inline greenText mr-2" size={24} /> Expert Webinars</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-left">
                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-xl flex flex-col gap-3">
                        <h4 className="text-xl font-semibold dark:text-whiteColor text-blackColor">Your Learning Journey</h4>
                        <div className="mb-2 dark:bg-gray-700 bg-gray-100 rounded p-3 font-semibold space-y-2">
                            <p>Phase 1: Tool Fundamentals</p>
                            <div className="w-full h-2 dark:bg-gray-600 bg-gray-300 rounded-full overflow-hidden">
                                <div className="GreenColorBackground h-full w-4/5 rounded-full"></div>
                            </div>
                        </div>
                        <div className="mb-2 dark:bg-gray-700 bg-gray-100 rounded p-3 font-semibold space-y-2">
                            <p>Phase 2: Threat Analysis</p>
                            <div className="w-full h-2 dark:bg-gray-600 bg-gray-300 rounded-full overflow-hidden">
                                <div className="GreenColorBackground h-full w-2/3 rounded-full"></div>
                            </div>
                        </div>
                        <div className="dark:bg-gray-700 bg-gray-100 rounded p-3 font-semibold space-y-2">
                            <p>Phase 3: Advanced Tool Mastery</p>
                            <div className="w-full h-2 dark:bg-gray-600 bg-gray-300 rounded-full overflow-hidden">
                                <div className="GreenColorBackground h-full w-1/2 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Cybersecurity Resources</h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="dark:bg-gray-700 bg-gray-100 rounded p-3 text-center flex gap-2">
                                <Shield className="greenText text-xl" />
                                <span>Tool Guides</span>
                            </div>
                            <div className="dark:bg-gray-700 bg-gray-100 rounded p-3 text-center flex gap-2">
                                <AlertTriangle className="greenText text-xl" />
                                <span>Threat Reports</span>
                            </div>
                            <div className="dark:bg-gray-700 bg-gray-100 rounded p-3 text-center flex gap-2">
                                <TrendingUp className="greenText text-xl" />
                                <span>Industry News</span>
                            </div>
                            <div className="dark:bg-gray-700 bg-gray-100 rounded p-3 text-center flex gap-2">
                                <Lock className="greenText text-xl" />
                                <span>Premium Tutorials</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dark:bg-darkgray bg-whiteColor shadow p-14 rounded-xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 dark:text-whiteColor text-blackColor">
                        Start Your Cybersecurity Journey Today
                    </h3>
                    <p className="mb-6 text-base md:text-lg max-w-3xl mx-auto dark:text-whiteColor text-blackColor">
                        Subscribe to our platform for access to premium cybersecurity tools, threat guides, and expert-led tutorials to elevate your skills.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a href="#subscribe" className="GreenColorBackground px-8 py-2 rounded-xl text-white text-lg hover:bg-green-700 transition-all">
                            Subscribe Now
                        </a>
                        <a href="#tools" className="border border-white text-white hover:bg-white hover:text-black px-8 py-2 rounded-xl text-lg transition-all">
                            Explore Tools
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

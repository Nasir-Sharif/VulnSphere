
import React from 'react';
import { Shield, AlertTriangle, Lock, DollarSign, TrendingUp } from "lucide-react";
// import cybersecurityBackground from '../assets/images/signupbanner.jpg';

export default function ShareYourKnowledge() {
    return (
        <section
            className="relative dark:bg-blackColor bg-whiteColor dark:text-whiteColor text-blackColor py-20 container-sm bg-cover bg-center Urbanist"
            // style={{ backgroundImage: `url(${cybersecurityBackground})` }}
        >
            <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-60 z-0"></div>
            <div className="relative z-10 px-4 md:px-0 lg:px-0">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="dark:bg-darkgray bg-whiteColor shadow p-6 rounded-2xl transition-transform duration-300 hover:scale-105">
                        <div className="mb-4 flex items-center gap-3">
                            <Shield className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" />
                            <h3 className="text-2xl font-bold mb-2 dark:text-whiteColor text-blackColor">Tool Tutorials</h3>
                        </div>
                        <p>
                            Create tutorials for tools like <span className="font-semibold">CrowdStrike, Nessus, and Splunk</span> to help learners master cybersecurity platforms.
                        </p>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
                        <div className="mb-4 flex items-center gap-3">
                            <AlertTriangle className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" />
                            <h3 className="text-2xl font-bold mb-2 dark:text-whiteColor text-blackColor">Threat Guides</h3>
                        </div>
                        <p>
                            Share guides on <span className="font-semibold">phishing, ransomware, and DDoS attacks</span> to educate users on the latest cybersecurity threats.
                        </p>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
                        <div className="mb-4 flex items-center gap-3">
                            <Lock className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" />
                            <h3 className="text-2xl font-bold mb-2 dark:text-whiteColor text-blackColor">Premium Content</h3>
                        </div>
                        <p>
                            Develop exclusive content for subscribers, offering in-depth tutorials and advanced cybersecurity strategies.
                        </p>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl transition-transform duration-300 hover:scale-105">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" />
                            <h3 className="text-xl font-bold mb-2 dark:text-whiteColor text-blackColor">Industry News</h3>
                        </div>
                        <p>
                            Stay ahead with insights on <span className="font-semibold">zero-day vulnerabilities</span> and emerging cybersecurity trends.
                        </p>
                    </div>
                </div>

                <div className="bg-green-500/10 shadow p-16 rounded-2xl text-center mb-20">
                    <div className="flex justify-center">
                        <div className="flex items-center gap-2 bg-green-500/10 text-white px-4 py-1 rounded-full mb-2 backdrop-blur-sm w-fit">
                            <DollarSign size={20} />
                            <span>Monetize Your Expertise</span>
                        </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold my-3 dark:text-whiteColor text-whiteColor">Share Your Knowledge & Earn</h3>
                    <p className="max-w-2xl mx-auto dark:text-whiteColor text-blackColor">
                        Are you a cybersecurity expert? Share tutorials, threat guides, and premium content to build your brand and earn income while helping others secure the digital world.
                    </p>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold dark:text-whiteColor text-blackColor">Why Share with Us?</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl text-center">
                        <div className="greenText mb-4 mx-auto flex justify-center"><Shield size={28} /></div>
                        <h3 className="text-lg font-bold mb-2 dark:text-whiteColor text-blackColor">Reach Global Learners</h3>
                        <p>Share your expertise with thousands of cybersecurity enthusiasts worldwide.</p>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl text-center">
                        <div className="greenText mb-4 mx-auto flex justify-center"><TrendingUp size={28} /></div>
                        <h3 className="text-lg font-bold mb-2 dark:text-whiteColor text-blackColor">Stay Industry-Relevant</h3>
                        <p>Contribute to the latest cybersecurity trends and threat education.</p>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl text-center">
                        <div className="greenText mb-4 mx-auto flex justify-center"><DollarSign size={28} /></div>
                        <h3 className="text-lg font-bold mb-2 dark:text-whiteColor text-blackColor">Earn Revenue</h3>
                        <p>Monetize your content with a fair revenue-sharing model.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

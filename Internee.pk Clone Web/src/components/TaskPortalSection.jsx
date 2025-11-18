
import React from 'react';
import { Shield, AlertTriangle, Lock, Book } from "lucide-react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import backgroundImage from '../assets/images/cybersecuritybackground.jpeg';
export default function TaskPortalSection() {
    return (
        <section
            className="relative dark:bg-blackColor bg-whiteColor text-white py-20 bg-cover bg-center Urbanist"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-60 z-0"></div>
            <div className="relative z-10 container-sm px-4 md:px-0 lg:px-0 text-center">
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 bg-green-500/10 text-lg px-4 py-1 rounded-full mb-4 backdrop-blur-sm w-fit">
                        <Shield size={20} />
                        <span>Cybersecurity Task Portal</span>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-snug mb-4 dark:text-whiteColor text-blackColor">
                    Master Cybersecurity Skills with Our Task Portal
                </h2>
                <p className="mb-12 text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-medium dark:text-whiteColor text-blackColor">
                    Transform your knowledge into expertise with hands-on tasks using industry-standard tools and real-world threat scenarios. Subscribe for premium access.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl mb-6">
                        <div className="mb-4"><Shield className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                        <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Hands-on Tool Tasks</h3>
                        <p className="mb-4">
                            Gain experience with tools like <span className="font-semibold">Wireshark, Splunk, and Nessus</span> through practical tasks and simulations.
                        </p>
                        <ul className="text-sm space-y-1 mt-2">
                            <li className="flex items-center text-base"><AiOutlineCheckCircle className="greenText text-2xl pr-4 py-1" />Tool-Based Exercises</li>
                            <li className="flex items-center text-base"><AiOutlineCheckCircle className="greenText text-2xl pr-4 py-1" />Real-World Scenarios</li>
                            <li className="flex items-center text-base"><AiOutlineCheckCircle className="greenText text-2xl pr-4 py-1" />Skill Building</li>
                        </ul>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl mb-6">
                        <div className="mb-4"><AlertTriangle className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                        <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Threat Simulation</h3>
                        <p className="mb-4">
                            Practice defending against <span className="font-semibold">phishing, ransomware, and DDoS attacks</span> with guided simulations.
                        </p>
                        <ul className="text-sm space-y-1 mt-2">
                            <li className="flex items-center text-base"><AiOutlineCheckCircle className="greenText text-2xl pr-4 py-1" />Threat Scenarios</li>
                            <li className="flex items-center text-base"><AiOutlineCheckCircle className="greenText text-2xl pr-4 py-1" />Mitigation Practice</li>
                            <li className="flex items-center text-base"><AiOutlineCheckCircle className="greenText text-2xl pr-4 py-1" />Progress Tracking</li>
                        </ul>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl">
                        <div className="mb-4"><Lock className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                        <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Premium Tool Access</h3>
                        <p className="mb-4">
                            Unlock advanced cybersecurity tools with a subscription for hands-on learning and skill development.
                        </p>
                    </div>

                    <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl">
                        <div className="mb-4"><Book className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                        <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Guided Learning Path</h3>
                        <p className="mb-4">
                            Follow a structured curriculum to master cybersecurity tools and stay updated on industry trends.
                        </p>
                    </div>
                </div>

                <div className="dark:bg-darkgray bg-whiteColor shadow mt-12 p-12 rounded-2xl">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 dark:text-whiteColor text-blackColor">
                        Ready to Master Cybersecurity?
                    </h3>
                    <p className="mb-6 text-base md:text-lg dark:text-whiteColor text-blackColor">
                        Subscribe to access premium tools, tutorials, and threat simulations to build your cybersecurity expertise.
                    </p>
                    <a
                        href="#subscribe"
                        className="GreenColorBackground text-white px-6 py-3 rounded-xl text-sm hover:bg-green-700 transition-all"
                    >
                        Start Your Journey Now
                    </a>
                </div>
            </div>
        </section>
    );
}


import React from 'react';
import { Shield, AlertTriangle, Lock, DollarSign } from "lucide-react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function InstructorSection() {
    return (
        <div className="relative z-20">
            <section className="dark:bg-blackColor bg-whiteColor dark:text-whiteColor text-blackColor py-20 px-4 md:px-10 Urbanist container-sm">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-whiteColor text-blackColor">
                        Cybersecurity Expert or Content Creator?
                    </h2>
                    <p className="greenText text-lg md:text-xl mb-6">
                        Share Your Expertise & Earn with Our Platform
                    </p>
                    <a
                        href="#instructor-signup"
                        className="GreenColorBackground hover:bg-green-700 transition px-6 py-3 text-lg rounded-xl font-bold text-white mb-12 inline-flex items-center gap-2"
                    >
                        Start Teaching Today <AiOutlineArrowRight />
                    </a>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                        <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl">
                            <div className="mb-4"><Shield className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                            <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Share Tool Tutorials</h3>
                            <p className="mb-4">
                                Create tutorials for tools like <span className="font-semibold">Wireshark, Splunk, and Nessus</span>. Help learners master cybersecurity skills while earning revenue.
                            </p>
                            <a href="#tutorials" className="greenText text-md font-medium flex items-center gap-2">
                                Learn More <AiOutlineArrowRight />
                            </a>
                        </div>

                        <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl">
                            <div className="mb-4"><AlertTriangle className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                            <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Educate on Threats</h3>
                            <p className="mb-4">
                                Develop content on <span className="font-semibold">phishing, ransomware, and zero-day exploits</span> to educate learners and enhance their threat awareness.
                            </p>
                            <a href="#threats" className="greenText text-md font-medium flex items-center gap-2">
                                Learn More <AiOutlineArrowRight />
                            </a>
                        </div>

                        <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl">
                            <div className="mb-4"><Lock className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                            <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Build Your Brand</h3>
                            <p className="mb-4">
                                Establish yourself as a trusted cybersecurity expert by sharing premium content and tutorials on our platform.
                            </p>
                            <a href="#branding" className="greenText text-md font-medium flex items-center gap-2">
                                Learn More <AiOutlineArrowRight />
                            </a>
                        </div>

                        <div className="dark:bg-darkgray bg-whiteColor shadow p-8 rounded-2xl">
                            <div className="mb-4"><DollarSign className="greenText bg-green-500/10 backdrop-blur-sm text-6xl p-3 rounded-xl" /></div>
                            <h3 className="text-2xl font-semibold mb-4 dark:text-whiteColor text-blackColor">Earn Revenue</h3>
                            <p className="mb-4">
                                Monetize your expertise with a transparent revenue-sharing model for your cybersecurity content and tool tutorials.
                            </p>
                            <a href="#earn" className="greenText text-md font-medium flex items-center gap-2">
                                Learn More <AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="absolute top-0 w-full h-1/4 dark:bg-blackColor bg-greenColor opacity-20"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)" }}
            ></div>
        </div>
    );
}

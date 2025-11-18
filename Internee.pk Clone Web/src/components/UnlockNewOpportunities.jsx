
import React from 'react';
import { Shield } from "lucide-react";

export default function UnlockNewOpportunities() {
    return (
        <>
            <div className="container-sm dark:bg-blackColor bg-blackColor Urbanist rounded-xl">
                <div className="py-28 px-4 md:px-0 lg:px-0 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-2 bg-whiteColor dark:bg-gray-800 text-sm px-1 py-1 rounded-full mb-2 w-fit font-semibold">
                        <span className="bg-blackColor dark:bg-whiteColor text-whiteColor dark:text-blackColor px-2 py-1 rounded-full">
                            Featured
                        </span>
                        <span>Explore Cybersecurity Tools</span>
                    </div>
                    <div className="text-4xl md:text-5xl text-white text-center max-w-xl">
                        <h1>Unlock Cybersecurity Expertise</h1>
                    </div>
                    <div>
                        <p className="text-white text-center max-w-3xl">
                            Take the first step toward mastering cybersecurity. Subscribe to access premium tools, threat guides, and industry insights.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                        <a
                            href="#subscribe"
                            className="GreenColorBackground px-8 py-2 rounded-xl text-white text-lg hover:bg-green-700 transition-all"
                        >
                            Get Started Now
                        </a>
                        <a
                            href="#tools"
                            className="border border-white text-white hover:bg-white hover:text-black px-8 py-2 rounded-xl text-lg transition-all"
                        >
                            Explore Tools
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-sm dark:text-whiteColor text-blackColor flex flex-col md:flex-row gap-4 justify-center px-4 md:px-0 lg:px-0 py-20 items-center">
                <div className="text-center">
                    <p className="text-6xl font-bold">50+</p>
                    <p className="text-lg">Cybersecurity Tools</p>
                </div>
                <div className="w-48 md:w-24 rotate-0 md:rotate-90"><hr /></div>
                <div className="text-center">
                    <p className="text-6xl font-bold">10,000+</p>
                    <p className="text-lg">Active Learners</p>
                </div>
                <div className="w-48 md:w-24 rotate-0 md:rotate-90"><hr /></div>
                <div className="text-center">
                    <p className="text-6xl font-bold">100+</p>
                    <p className="text-lg">Threat Guides</p>
                </div>
            </div>
        </>
    );
}

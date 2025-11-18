
import React from 'react';
import { Shield } from "lucide-react";
import backgroundImage from '../assets/images/network-security.jpg';
export default function AICareerJourney() {
    return (
        <section
            className="relative text-white py-28 px-2 md:px-0 lg:px-0 bg-cover bg-center Urbanist"
            style={{
                 backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 dark:bg-blackColor bg-whiteColor opacity-80 z-0"></div>
            <div className="container-sm">
                <div className="relative z-10 max-w-2xl mx-auto text-center">
                    <div className="flex flex-row justify-center">
                        <div className="flex items-center gap-2 bg-green-500/10 text-lg px-4 py-1 rounded-full mb-4 backdrop-blur-sm w-fit">
                            <Shield size={20} />
                            <span>Your Cybersecurity Journey</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-whiteColor text-blackColor">
                        Master Cybersecurity: Learn Tools, Threats, & Trends
                    </h2>
                    <p className="text-base md:text-lg max-w-3xl mb-10 dark:text-whiteColor text-blackColor">
                        Dive into the world of cybersecurity with our platform. Explore cutting-edge tools, stay updated on the latest threats, and gain industry insights to protect the digital world. Subscribe for premium access to advanced tools and resources.
                    </p>
                </div>
            </div>
        </section>
    );
}

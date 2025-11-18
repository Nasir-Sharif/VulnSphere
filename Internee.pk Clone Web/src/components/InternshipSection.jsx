
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

// Cybersecurity tool images (replace with actual image paths)
import crowdstrike from '../assets/images/Crowd Strike Logo.png';
import paloAlto from '../assets/images/Palo Alto.png';
import fortinet from '../assets/images/fortinet logo.png';
import symantec from '../assets/images/sheild.png';
import checkpoint from '../assets/images/cisco.png';
import splunk from '../assets/images/soc.jpg';

const cybersecurityTools = [
  { name: 'CrowdStrike Falcon', image: crowdstrike, alt: 'CrowdStrike Falcon Cybersecurity Platform', link: '#subscribe' },
  { name: 'Palo Alto Cortex XDR', image: paloAlto, alt: 'Palo Alto Cortex XDR Platform', link: '#subscribe' },
  { name: 'Fortinet FortiGate', image: fortinet, alt: 'Fortinet FortiGate Firewall', link: '#subscribe' },
  { name: 'Symantec Endpoint Security', image: symantec, alt: 'Symantec Endpoint Security Platform', link: '#subscribe' },
  { name: 'Check Point Quantum', image: checkpoint, alt: 'Check Point Quantum Security Platform', link: '#subscribe' },
  { name: 'Splunk Security Analytics', image: splunk, alt: 'Splunk Security Analytics Platform', link: '#subscribe' },
];

export default function InternshipSection() {
    return (
        <section className="dark:bg-blackColor bg-whiteColor dark:text-whiteColor text-blackColor px-4 md:px-0 lg:px-0 py-16 Urbanist">
            <div className="container-sm">
                <div className="text-center mb-12 font-bold">
                    <div className="flex justify-center items-center gap-2 bg-whiteColor dark:bg-gray-800 text-sm px-4 py-2 rounded-full mb-4 shadow-md">
                        <span className="bg-blackColor dark:bg-whiteColor text-whiteColor dark:text-blackColor px-3 py-1 rounded-full font-semibold">
                            Featured
                        </span>
                        <span>Explore Cybersecurity Tools & News</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-whiteColor text-blackColor">
                        Master Cybersecurity Tools <br className="hidden md:block" />
                        with One Click!
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {cybersecurityTools.map((tool, index) => (
                        <div
                            key={index}
                            className="group dark:bg-darkgray bg-whiteColor dark:text-whiteColor text-blackColor rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={tool.image}
                                alt={tool.alt}
                                className="w-full h-48 object-contain p-4 bg-gray-50 dark:bg-gray-700 transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 dark:text-whiteColor text-blackColor">{tool.name}</h3>
                                <a
                                    href={tool.link}
                                    className="flex items-center gap-2 greenText font-semibold text-md transition-colors"
                                >
                                    Subscribe Now
                                    <AiOutlineArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

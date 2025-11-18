
import React from 'react';
import { Shield } from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { Carousel } from 'antd';
import user1 from "../assets/images/boy1.webp";
import user2 from "../assets/images/boy2.webp";
import user3 from "../assets/images/boy3.webp";
import user4 from "../assets/images/chatbot.webp";

export default function JoinCommunity() {
    return (
        <section className="dark:text-whiteColor text-blackColor py-28 px-4 md:px-0 lg:px-0 Urbanist container-sm">
            <div className="flex flex-col md:flex-row lg:flex-row gap-8">
                <div className="min-w-40 max-w-2xl text-center md:text-left">
                    <div className="flex justify-center md:justify-start">
                        <div className="flex items-center gap-2 bg-whiteColor dark:bg-gray-800 text-md px-3 py-1 rounded-full mb-4 w-fit">
                            <Shield size={20} />
                            <span>Trusted by Thousands</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl leading-relaxed mb-4 dark:text-whiteColor text-blackColor">
                        Join Our Cybersecurity Learning Community
                    </h2>
                    <a
                        href="#join"
                        className="GreenColorBackground px-8 py-3 rounded-xl text-white text-lg hover:bg-green-700 transition-all inline-flex items-center gap-2"
                    >
                        Join Our Community
                    </a>
                </div>
                <div className="max-w-xl">
                    <Carousel autoplay effect="fade">
                        <div className="p-12">
                            <div className="bg-whiteColor dark:bg-darkgray text-center rounded-2xl shadow-md p-8 max-w-md mx-auto relative">
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                    <img
                                        src={user1}
                                        alt="Ali Raza"
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover"
                                    />
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-xl font-bold dark:text-whiteColor text-blackColor">Ali Raza</h3>
                                    <p className="text-gray-500">Islamabad, Pakistan</p>
                                    <p className="text-gray-600 dark:text-gray-300 italic mt-4">
                                        “This platform helped me master Wireshark and stay updated on ransomware threats. A game-changer!”
                                    </p>
                                    <div className="flex justify-center mt-4 text-yellow-400 text-xl gap-1">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-12">
                            <div className="bg-whiteColor dark:bg-darkgray text-center rounded-2xl shadow-md p-8 max-w-md mx-auto relative">
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                    <img
                                        src={user2}
                                        alt="Mohammad Rafiq"
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover"
                                    />
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-xl font-bold dark:text-whiteColor text-blackColor">Mohammad Rafiq</h3>
                                    <p className="text-gray-500">Larkana, Pakistan</p>
                                    <p className="text-gray-600 dark:text-gray-300 italic mt-4">
                                        “The premium tool access and threat guides are worth every penny. Highly recommend!”
                                    </p>
                                    <div className="flex justify-center mt-4 text-yellow-400 text-xl gap-1">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-12">
                            <div className="bg-whiteColor dark:bg-darkgray text-center rounded-2xl shadow-md p-8 max-w-md mx-auto relative">
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                    <img
                                        src={user3}
                                        alt="Ayesha Khan"
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover"
                                    />
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-xl font-bold dark:text-whiteColor text-blackColor">Ayesha Khan</h3>
                                    <p className="text-gray-500">Lahore, Pakistan</p>
                                    <p className="text-gray-600 dark:text-gray-300 italic mt-4">
                                        “Learning Splunk and staying updated on zero-day exploits has been seamless with this platform.”
                                    </p>
                                    <div className="flex justify-center mt-4 text-yellow-400 text-xl gap-1">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-12">
                            <div className="bg-whiteColor dark:bg-darkgray text-center rounded-2xl shadow-md p-8 max-w-md mx-auto relative">
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                    <img
                                        src={user4}
                                        alt="Kashan Soomro"
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg z-20 object-cover"
                                    />
                                </div>
                                <div className="mt-16">
                                    <h3 className="text-xl font-bold dark:text-whiteColor text-blackColor">Kashan Soomro</h3>
                                    <p className="text-gray-500">Islamabad, Pakistan</p>
                                    <p className="text-gray-600 dark:text-gray-300 italic mt-4">
                                        “The tutorials and news updates helped me secure a cybersecurity role. Amazing platform!”
                                    </p>
                                    <div className="flex justify-center mt-4 text-yellow-400 text-xl gap-1">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

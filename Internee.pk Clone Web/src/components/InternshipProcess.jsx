
import React from 'react';
import { Shield } from "lucide-react";

const InternshipProcess = () => {
    return (
        <div className="container-sm">
            <div className="flex flex-col lg:flex-row py-28 px-4 md:px-0 lg:px-0 items-center Urbanist dark:text-whiteColor text-blackColor">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-2 bg-green-500/10 text-sm px-3 py-1 rounded-full mb-4 w-fit">
                        <Shield size={20} />
                        <span>How It Works</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 dark:text-whiteColor text-blackColor leading-relaxed">
                        A Simple Process to Master Cybersecurity Tools
                    </h1>
                </div>

                <div className="flex flex-row gap-3">
                    <div className="flex flex-col justify-around relative items-center">
                        <div className="GreenColorBackground text-white rounded-full text-md font-semibold py-2 px-1 w-20 text-center">
                            <p>Step 1</p>
                        </div>
                        <div className="bg-gray-300 dark:bg-gray-600 rounded-full text-md font-semibold py-2 px-1 w-20 text-center">
                            <p>Step 2</p>
                        </div>
                        <div className="bg-gray-300 dark:bg-gray-600 rounded-full text-md font-semibold py-2 px-1 w-20 text-center">
                            <p>Step 3</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start">
                            <div className="bg-green-500/10 p-8 rounded-xl mb-4 backdrop-blur-sm">
                                <h2 className="text-xl font-semibold mb-2 dark:text-whiteColor text-blackColor">Sign Up & Explore Tools</h2>
                                <p className="dark:text-whiteColor text-blackColor">
                                    Create an account and browse our extensive library of cybersecurity tools and resources.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-500/10 p-8 rounded-xl mb-4 backdrop-blur-sm">
                                <h2 className="text-xl font-semibold mb-2 dark:text-whiteColor text-blackColor">Subscribe for Premium Access</h2>
                                <p className="dark:text-whiteColor text-blackColor">
                                    Unlock premium tools and tutorials with a subscription tailored to your learning needs.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="bg-green-500/10 p-8 rounded-xl mb-4 backdrop-blur-sm">
                                <h2 className="text-xl font-semibold mb-2 dark:text-whiteColor text-blackColor">Master & Stay Updated</h2>
                                <p className="dark:text-whiteColor text-blackColor">
                                    Complete tutorials, practice with tools, and stay informed on the latest cybersecurity threats.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InternshipProcess;
